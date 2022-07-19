const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const server = express();

server.use(express.json());
server.use(cors());

let produtos = []

//Retorna todos os produtos
server.get('/produtos', (req, res) => {
    return res.json(produtos)
})

//Retorna um produto
server.get('/produtos/:index', (req, res) => {
    const { index } = req.params
    let produtosAux;

    produtosAux = produtos.filter(item => item.id == index);

    return res.json(produtosAux)
})

//Criar novo produto
server.post('/produtos', (req, res) => {
    let produto = req.body;
    let gerarId;

    if (produtos.length > 0) {
        gerarId = [...produtos].pop();
        console.log("id: ", gerarId)
        gerarId = gerarId.id + 1;
    } else {
        gerarId = 1;
    }

    produto.id = gerarId;

    produtos.push(produto)

    return res.json(produtos)
})

//Atualiza um produto
server.put('/produtos', (req, res) => {

    let produto = req.body;

    produtos.map(item => {
        if (item.id == produto.id) {
            item.nome = produto.nome;
            item.valor = produto.valor;
            item.qtd = produto.qtd;
        }
    })

    return res.json(produtos)
})

//Deleta um produto 
server.delete('/produtos/:index', (req, res) => {
    const { index } = req.params

    produtos = produtos.filter(item => item.id != index);

    return res.json({ message: 'O curso foi deletado' })
})


server.listen(8000);