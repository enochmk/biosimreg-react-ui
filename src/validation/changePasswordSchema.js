import * as yup from 'yup';

const changePasswordSchema = yup
  .object({
    email: yup.string().required(),
  })
  .required();

export default changePasswordSchema;
