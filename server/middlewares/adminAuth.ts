import { Response, NextFunction } from 'express';
import { CustomError } from '.';
import { UserRequest } from './interfaces';

const pharmacyAuth = async (req: UserRequest['user'], res: Response, next: NextFunction) => {
  const { role } = req;

  if (role === 'admin') {
    next();
  } else {
    throw new CustomError(401, 'You are not authenticated');
  }
};

export default pharmacyAuth;
