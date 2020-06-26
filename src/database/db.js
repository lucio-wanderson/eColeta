//Importar dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//Iniciar objeto que fará operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
//Utilizar o objeto de banco de dados para criar operações
db.serialize(() => {
    //Criar tabela
    // db.run(`
    //         CREATE TABLE IF NOT EXISTS places(
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         name TEXT,
    //         address TEXT, 
    //         address2 TEXT,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );
    // `)
    // //Inserir dados
    // const query = `
    //     INSERT INTO places(
    //         image,
    //         name,
    //         address,
    //         address2,
    //         state,
    //         city,
    //         items
    //     ) VALUES (?, ?, ?, ?, ?, ?, ?);`

    // const values = [
    //     "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=801&q=80",
    //     "Papersider",
    //     "Guilherme Guemballa, Jardim América",
    //     "N° 260",
    //     "Santa Catarina",
    //     "Rio do Su",
    //     "Papéis e Papelão"
    // ]

    // function afterInsertData(err) {
    //     if (err) {
    //         return console.log(err)
    //     }

    //     console.log("Cadastrado com sucesso!")
    //     console.log(this)
    // }

    // //db.run(query, values, afterInsertData)

    //Consultar dados
    // db.all(`SELECT * FROM places`, function(err, rows){
    //     if (err) {
    //         return console.log(err)
    //     }

    //     console.log("Aqui estão seus registros:")
    //     console.log(rows)
    // })

    //Deletar dados
    // db.run(`DELETE FROM places WHERE id =?`, [3], function(err){
    //     if (err) {
    //         return console.log(err)
    //     }

    //     console.log("Deletado!")
    // })

})