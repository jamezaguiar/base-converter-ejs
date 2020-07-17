import { Router } from 'express';

import binaryRouter from './binary.routes';
import octalRouter from './octal.routes';
import hexadecimalRouter from './hexadecimal.routes';

const routes = Router();

routes.get('/', (request, response) => {
  return response.render('index');
});

routes.use('/bin', binaryRouter);

routes.get('/oct', octalRouter);

routes.get('/hex', hexadecimalRouter);

export default routes;
