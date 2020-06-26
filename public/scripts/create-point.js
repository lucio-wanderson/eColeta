function populateUFs(){
    const ufSelector = document.querySelector("select[name = uf]")

    //Preencher as opções do select uf com jason da API do IBGE
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then((res) => { return res.json()})
        .then((states) => {
            for(const state of states){
                ufSelector.innerHTML += `<option value = "${state.id}">${state.nome}</option>`
            }
        })
}

populateUFs()

function getCities(event){
    const citySelect = document.querySelector("select[name = city]")
    const stateInput = document.querySelector("input[name = state]")
    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = ""
    citySelect.disabled = true

    fetch(url)
        .then(res => res.json())
        .then(cities => {
            for(const city of cities){
                citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
            }

            citySelect.disabled = false

        })
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)


//Iens de coleta
const itemsToCollect = document.querySelectorAll(".items-grid li")

for(let item of itemsToCollect){
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []

function handleSelectedItem(event){
    const ItemLi = event.target

    //Adicionar ou remover classe nas LIs
    ItemLi.classList.toggle("selected")

    const itemId = event.target.dataset.id
    console.log('ITEM-ID', itemId)

//Verificar se existem itens selecionados, se sim, pegar esses itens
const alreadySelected = selectedItems.findIndex(item => {
    const itemFound = item == itemId
    return itemFound
})

//Se já estiver selecionado, tirar da seleção
if(alreadySelected >= 0){
    const filteredItems = selectedItems.filter(item => {
        const itemIsDirefent = item != itemId
        return itemIsDirefent
    })

    selectedItems = filteredItems
} else{
    //Se não estiver selecionado,  dicionar à seleção
     selectedItems.push(itemId)
}

console.log('Item selecionados: ', selectedItems)

//Atualizar o campo escondido com os itens selecionados
collectedItems.value = selectedItems
}