import optionsMaria from './options/mariaDB';
import knex from 'knex';
knex(optionsMaria)

knex.schema.createTable('productos', table => {
    table.increments('id')
    table.string('name')
    table.string('price')
    table.string('url')
}).then(() => {
    console.log("Table created")
}).catch((err) => {
    console.log(err)
}).finally(() => {
    knex.destroy()
})