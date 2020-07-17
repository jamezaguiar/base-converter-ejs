import { Router } from 'express';

import ConvertDecToBinService from '../services/ConvertDecToBinService';
import ConvertBinToDecService from '../services/ConvertBinToDecService';

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
  const data = { decimalNumber } as { decimalNumber: string };
  const conversor = new ConvertDecToBinService();
  const numberToConvert = data.decimalNumber;
  const convertedNumber = conversor.execute(data);
  const message = ' em binário é:';

  return response.render('result', {
    numberToConvert,
    convertedNumber,
    message,
  });
});

routes.get('/convertBinToDec', (request, response) => {
  const { binaryNumber } = request.query;
  const data = { binaryNumber } as { binaryNumber: string };
  const conversor = new ConvertBinToDecService();
  const numberToConvert = data.binaryNumber;
  const message = ' em decimal é:';
  try {
    const convertedNumber = conversor.execute(data);
    return response.render('result', {
      numberToConvert,
      convertedNumber,
      message,
    });
  } catch (error) {
    return response.render('error');
  }
});

export default routes;
