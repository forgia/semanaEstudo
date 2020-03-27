const express = require('express');

const ongcontroller = require('./controllers/OngController');

const incidentcontroller = require('./controllers/IncidentController');

const profilecontroller = require('./controllers/profileController');

const sessioncontroller = require('./controllers/sessionController');


const routes = express.Router();

routes.post('/session', sessioncontroller.create);

routes.get('/ongs', ongcontroller.index);

routes.post('/ongs', ongcontroller.create);

routes.get('/profile', profilecontroller.index);

routes.get('/incidents', incidentcontroller.index);

routes.post('/incidents', incidentcontroller.create);

routes.delete('/incidents/:id', incidentcontroller.delete);

module.exports = routes;