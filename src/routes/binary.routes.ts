import { Router } from 'express';

import ConvertDecToBinService from '../services/ConvertDecToBinService';
import ConvertBinToDecService from '../services/ConvertBinToDecService';

const binaryRouter = Router();

binaryRouter.get('/', (request, response) => {
  return response.render('bin');
});

binaryRouter.get('/convertDecToBin', (request, response) => {
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

binaryRouter.get('/convertBinToDec', (request, response) => {
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

export default binaryRouter;
