import jwt from 'jsonwebtoken';
import { errorHandler } from './error';

export const verifyToken = (req, res, next) =>{
  const token = req.cookies.access_token;

  if(!token) return res.status(401).json('You need to login');

  jwt.verify(token, process.env.JWT_SECRET, (err, user) =>{
    if(err) return next(errorHandler(403, 'Token is nnot valid'));
    req.user = user;
    next();
  });
}