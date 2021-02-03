//const express = require('express');
import express from 'express';  // Dependência que suporta essa sintaxe -> sucrase
const server = express();

server.use(express.json())

const usuarios = ["Suhailah", "Sabrina", "Pedro", "Geraldo"]

// SELECT * FROM usuarios
server.get('/usuarios', (req,res) =>{
  res.json(usuarios)  

})

// SELECT * FROM usuarios WHERE id = :index
server.get("/usuarios/:index", (req, res) => {
    const { index } = req.params
    res.json(usuarios[index])
})

// INSERT INTO usuarios(name) value("Suhailah")
server.post("/usuarios",  (req, res) => {
  const { name } = req.body
  usuarios.push(name)
  res.json("Usuário Cadastrado")

})

server.listen(3333)

// Route params
// Query params
// Request Body, JSON

/*
{
  "name": "Suhailah"
}*/