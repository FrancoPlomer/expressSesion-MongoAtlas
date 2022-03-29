const {normalize, denormalize, schema } = require('normalizr');

const schemaAuthor = new schema.Entity('author', {}, { idAttribute: 'email' });

const schemaMessage = new schema.Entity('message', {
    author: new schema.Entity('message', {
    author: schemaAuthor
    })
});



const schemaMesagges = new schema.Entity('messages', {
    messages: [schemaMessage]
}
);

const normalizeMessages = (messages) =>  normalize(messages, schemaMesagges);
const messageDenormalize = (message) => denormalize(message.result ,schemaMesagges, message.entities)


module.exports = {
    normalizeMessages,
    messageDenormalize
};