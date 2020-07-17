import { Router } from 'express';

import ConvertDecToBinService from '../services/ConvertDecToBinService';

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

// Rotas para conversões de bases numéricas
routes.get('/convertDecToBin', (request, response) => {
  const { decimalNumber } = request.query;
  const data = {
    decimalNumber,
  } as { decimalNumber: string };
  const conversor = new ConvertDecToBinService();
  const result = conversor.execute(data);

  return response.render('result', {
    result,
  });
});

export default routes;
