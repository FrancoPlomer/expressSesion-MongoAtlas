const { ServerApiVersion } = require('mongodb');

module.exports = {
    PORT: process.env.PORT || 8080,
    mongoRemote: {
        client: { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 },
        cnxStr: `mongodb+srv://francoPlomer:Deggeneratiion98@cluster0.fihir.mongodb.net/mensajes?retryWrites=true&w=majority`
    },
}