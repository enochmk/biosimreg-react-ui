import * as yup from 'yup';

const changePasswordSchema = yup.object({
  email: yup.string().required(),
});

export default changePasswordSchema;
