import optionsSQLITE from './options/SQLite3'
import knex from 'knex'

knex(optionsSQLITE)

knex.schema.createTable('ecommerce', table => {
    table.increments('id')
    table.string('mensaje')
}).then(() => {
    console.log("Table created")
}).catch((err) => {
    console.log(err)
}).finally(() => {
    knex.destroy()
})