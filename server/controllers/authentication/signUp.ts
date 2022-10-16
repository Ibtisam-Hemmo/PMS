import { Request, Response, NextFunction } from 'express';
import { hash } from 'bcryptjs';
import { findPharmacy, findPharmacyEmail, signup } from '../../queries/authentication';
import signupSchema from '../../validation/signupSchema';
import { generateToken, CustomError } from '../../utils';

const signUp = async (req: Request, res: Response, next:NextFunction) => {
  try {
    await signupSchema(req.body);

    const licenseExisted = await findPharmacy(req.body.license_number);
    if (licenseExisted) {
      throw new CustomError(400, 'Try again, This Pharmacy is already Signed');
    }

    const adminExisted = await findPharmacyEmail(req.body.email);
    if (adminExisted) {
      throw new CustomError(400, 'Try again, You can not sign up with this email');
    }

    const emailExisted = await findPharmacyEmail(req.body.email);
    if (emailExisted) {
      throw new CustomError(400, 'Try again, This email is already existed');
    }

    const hashed = await hash(req.body.password, 10);
    const pharamcyData = await signup(req.body, hashed);

    const token = await generateToken({
      owner_id: pharamcyData.owner_id,
      role: 'pharmacy',
    });

    return res.cookie('token', token).json(pharamcyData);
  } catch (err) {
    next(err);
  }
};

export default signUp;
