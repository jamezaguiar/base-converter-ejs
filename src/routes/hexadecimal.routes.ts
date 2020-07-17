import { Router } from 'express';

import ConvertDecToHexService from '../services/ConvertDecToHexService';
import ConvertHexToDecService from '../services/ConvertHexToDecService';

const hexadecimalRouter = Router();

hexadecimalRouter.get('/', (request, response) => {
  return response.render('hex');
});

hexadecimalRouter.get('/convertDecToHex', (request, response) => {
  const { decimalNumber } = request.query;
  const data = { decimalNumber } as { decimalNumber: string };
  const conversor = new ConvertDecToHexService();
  const numberToConvert = data.decimalNumber;
  const convertedNumber = conversor.execute(data);
  const message = ' em hexadecimal é:';

  return response.render('result', {
    numberToConvert,
    convertedNumber,
    message,
  });
});

hexadecimalRouter.get('/convertHexToDec', (request, response) => {
  const { hexadecimalNumber } = request.query;
  const data = { hexadecimalNumber } as { hexadecimalNumber: string };
  const conversor = new ConvertHexToDecService();
  const numberToConvert = data.hexadecimalNumber;
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

export default hexadecimalRouter;
