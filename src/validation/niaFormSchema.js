import * as yup from 'yup';

export const registrationSchema = yup.object({
  pinNumber: yup.string().min(14).max(15).required(),
  surname: yup.string().required(),
  msisdn: yup.string().min(9).max(9).required(),
  iccid: yup.string().min(6).required(),
  alternativeNumber: yup.string().min(9).max(9).required(),
  nextOfKin: yup.string().min(3).required(),
});

export const registrationMFSSchema = yup.object({
  pinNumber: yup.string().min(14).max(15).required(),
  surname: yup.string().min(3).max(30).required(),
  msisdn: yup.string().min(9).max(9).required(),
  forenames: yup.string().min(3).max(25).required(),
  alternativeNumber: yup.string().min(9).max(9).required(),
  nextOfKin: yup.string().min(5).required(),
  gender: yup.string().lowercase().oneOf(['male', 'female']).required(),
  dateOfBirth: yup.date(),
});

export const reRegistrationSchema = yup.object({
  pinNumber: yup.string().min(14).max(15).required(),
  surname: yup.string().required(),
  msisdn: yup.string().min(9).max(9).required(),
  gender: yup.string(),
  dateOfBirth: yup.string(),
  forenames: yup.string().min(3).required(),
});
