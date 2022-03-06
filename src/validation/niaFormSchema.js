import * as yup from 'yup';

const schema = {
  pinNumber: yup
    .string()
    .min(14, 'Invalid Pin Number')
    .max(15, 'Invalid Pin Number')
    .required(),
  name: yup
    .string()
    .min(3, 'Name too short.')
    .max(30, 'Name too long.')
    .required(),
  fullName: yup
    .string()
    .min(6, 'Name too short.')
    .max(30, 'Name too long.')
    .required(),
  gender: yup.string().lowercase().oneOf(['male', 'female']).required(),
  iccid: yup.string().min(6, 'Invalid Length.').required(),
  phoneNumber: yup
    .string()
    .min(10, 'Invalid Phone Number.')
    .max(10, 'Invalid Phone Number.')
    .required(),
  dateOfBirth: yup.string(),
};

export const registrationSchema = yup.object({
  pinNumber: schema.pinNumber,
  surname: schema.name,
  msisdn: schema.phoneNumber,
  iccid: schema.iccid,
  alternativeNumber: schema.phoneNumber,
  nextOfKin: schema.fullName,
});

export const registrationMFSSchema = yup.object({
  pinNumber: schema.pinNumber,
  surname: schema.name,
  forenames: schema.name,
  msisdn: schema.phoneNumber,
  alternativeNumber: schema.phoneNumber,
  nextOfKin: schema.fullName,
  gender: schema.gender,
  dateOfBirth: schema.dateOfBirth,
});

export const reRegistrationSchema = yup.object({
  pinNumber: schema.schema.pinNumber,
  surname: schema.name,
  forenames: schema.name,
  msisdn: schema.phoneNumber,
  gender: schema.gender,
  dateOfBirth: schema.dateOfBirth,
});
