import { Router } from 'express';

const hexadecimalRouter = Router();

hexadecimalRouter.get('/', (request, response) => {
  return response.render('hex');
});

export default hexadecimalRouter;
