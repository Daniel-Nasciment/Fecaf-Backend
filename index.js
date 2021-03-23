const express = require('express');
const path = require('path');
const config = require('config');

const port = process.env.PORT || config.get('server.port');

const pedidos = [
    {cliente: 'Daniel', sabor: 'Pizza de Strogonoff', tamanho: 'Grande', quantidade: '1'},
    {cliente: 'Daniel', sabor: 'Pizza de Strogonoff', tamanho: 'Grande', quantidade: '1'}
  ];

const app = express();

app.set('port', port);

app.route('/pedido').get(
    (req, res) => {
        res.status(200).json(pedidos)
    }
)

app.listen(port, () => {
    console.log("Servidor iniciado na porta " + port)
})