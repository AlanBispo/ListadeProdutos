const express = require('express');
const cors = require('cors');

const server = express();

server.use(express.json());
server.use(cors());
const produtos = [{}]

//Retorna todos os produtos
server.get('/produtos', (req, res) => {
    return res.json(produtos)
})

//Retorna um produto
server.get('/produtos/:index', (req, res) => {
    const { index } = req.params

    return res.json(produtos[index])
})

//Criar novo produto
server.post('/produtos', (req, res) => {
    const { name } = req.body
    const { cost } = req.body
    
    produtos.push(name, cost)
    
    return res.json(produtos)
})

//Atualiza um produto
server.put('/produtos/:index', (req, res) => {
    const { index } = req.params
    const { name } = req.body

    produtos[index] = name

    return res.json(produtos)
})
//Deleta um produto 
server.delete('/produtos/:index', (req, res) => {
    const { index } = req.params
    
    produtos.splice(index, 1)

    return res.json({ message: 'O curso foi deletado' })
})


server.listen(8000);