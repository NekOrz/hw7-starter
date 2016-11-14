import { Router } from 'express';
import users from './users.json';

const router = new Router();
// Write your restful api here:

router.get('/users/', (req, res) => {
  res.json(users);
});

router.get('/users/:id', (req, res, next) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    next();
  }
  if (id > 0 && id <= 2) {
    res.json(users.users[id - 1]);
  } else {
    next();
  }
});


export default router;
