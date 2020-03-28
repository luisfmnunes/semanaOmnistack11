const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// Rota / Recurso

// Métodos HTTP:

    // GET: Buscar uma informação do back-end
    // POST: Criar uma informação no back-end
    // PUT: Alterar uma informação no back-end
    // DELETE: Deletar uma informação no back-end

// Tipos de parâmetros:
    // Query Params: Parâmetros nomeados enviados na rota após ?(filtros,paginação)
    // Route Params: Parâmetros utilizados para identificar recursos
    // Request Body: Corpo da requisição, utilizaod para criar ou alterar recursos


// Bancos de Dados
    // SQL: MySQL, SQLite, PostgreSQL, Oracle, etc
    // NoSQL: MongoDB, CouchDB, etc

    // Instalação
        // Driver: SELECT * FROM users
        // Query Builder: table('users').select('*').where()

// Entidades da Aplicação
    // ONGs
    // Caso (Incident)
// Funcionalidades da Aplicação
    // login de ONG
    // cadastro de ONG
    // logout
    // cadastrar novos casos
    // deletar casos
    // listar casos específicos de uma ONG
    // listar todos os casos
    // entrar em contato com a ONG (whatsapp,email)

app.listen(3333);


