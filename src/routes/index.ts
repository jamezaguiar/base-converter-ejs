import { Router } from 'express';

const routes = Router();

// Rotas de renderização das páginas
routes.get('/', (request, response) => {
  return response.render('index');
});
routes.get('/bin', (request, response) => {
  return response.render('bin');
});
routes.get('/oct', (request, response) => {
  return response.render('oct');
});
routes.get('/hex', (request, response) => {
  return response.render('hex');
});

export default routes;
