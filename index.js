const express = require('express');
const config = require('config');

const port = process.env.PORT || config.get('server.port');

const pedidos = [];

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.set('port', port);

app.route('/pedidos').get(
    (req, res) => {
        res.status(200).json(pedidos)
    }
)

app.route('/pedidos/adicionar').post(
    (req, res) => {
       pedidos.push(req.body);
       res.status(200).send("Concluido")
    }
)



app.listen(port, () => {
    console.log("Servidor iniciado na porta " + port)
})