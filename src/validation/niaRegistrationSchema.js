import * as yup from 'yup';

const niaRegistrationSchema = yup.object({
  pinNumber: yup.string().min(14).max(15).required(),
  surname: yup.string().required(),
  msisdn: yup.string().min(9).max(9).required(),
  iccid: yup.string().min(6).required(),
  alternativeNumber: yup.string().min(9).max(9).required(),
  nextOfKin: yup.string().min(3).required(),
});

export default niaRegistrationSchema;
