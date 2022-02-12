import * as yup from 'yup';

const schema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().min(6).required(),
  })
  .required();

export default schema;
