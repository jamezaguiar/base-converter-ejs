import { Router } from 'express';

import ConvertDecToOctService from '../services/ConvertDecToOctService';
import ConvertOctToDecService from '../services/ConvertOctToDecService';

const octalRouter = Router();

octalRouter.get('/', (request, response) => {
  return response.render('oct');
});

octalRouter.get('/convertDecToOct', (request, response) => {
  const { decimalNumber } = request.query;
  const data = { decimalNumber } as { decimalNumber: string };
  const conversor = new ConvertDecToOctService();
  const numberToConvert = data.decimalNumber;
  const convertedNumber = conversor.execute(data);
  const message = ' em octal é:';

  return response.render('result', {
    numberToConvert,
    convertedNumber,
    message,
  });
});

octalRouter.get('/convertOctToDec', (request, response) => {
  const { octalNumber } = request.query;
  const data = { octalNumber } as { octalNumber: string };
  const conversor = new ConvertOctToDecService();
  const numberToConvert = data.octalNumber;
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

export default octalRouter;
