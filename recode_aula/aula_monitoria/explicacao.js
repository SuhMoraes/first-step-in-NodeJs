//const express = require('express');
import express from 'express';  // Dependência que suporta essa sintaxe -> sucrase
const server = express();

// Query params/Query Strings == localhost:3333/usuarios?name=Suhailah
  //server.get("/usuarios", (req, res) => {
  //  const valueParam = req.query.name

  //  res.send(`Olá, ${valueParam}`)
  //})

//Route params ==  localhost:3333/usuarios/id:
  //server.get('/usuarios/:id', (req,res) =>{
  //  const { id } = req.params

  //  res.send(`O id é:  ${id}`)
  //})


  // Métodos ou verbos HTTP

// GET == SELECT
// POST == INSERT
// PUT == UPDATE
// DELETE == DELETE

// Exemplo sem o conceito de REST

// https://localhost:3333/usuarios == GET
// https://localhost:3333/usuarios/salvar == POST
// https://localhost:3333/usuarios/atualizar == POST
// https://localhost:3333/usuarios/remover == POST


// Exemplo, utilizando o conceito de REST

// https://localhost:3333/usuarios == GET
// https://localhost:3333/usuarios == POST
// https://localhost:3333/usuarios/:id == PUT
// https://localhost:3333/usuarios/:id == DELETE

// SELECT * FROM usuarios
server.get('/usuarios', (req,res) =>{

})

// INSERT INTO usuarios(name) values('Gui')
server.post('/usuarios', (req,res) =>{
  
})

// 
server.put('/usuarios/:id', (req,res) =>{
  
})


server.listen(3333)