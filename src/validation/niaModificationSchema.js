import * as yup from 'yup';

const niaRegistrationSchema = yup.object({
  pinNumber: yup.string().min(14).max(15).required(),
  surname: yup.string().required(),
  msisdn: yup.string().min(9).max(9).required(),
  gender: yup.string(),
  dateOfBirth: yup.string(),
  forenames: yup.string().min(3).required(),
});

export default niaRegistrationSchema;
