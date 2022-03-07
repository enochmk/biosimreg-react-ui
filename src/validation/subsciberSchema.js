import * as yup from 'yup';

const schema = {
  phoneNumber: yup
    .string()
    .min(9, 'Invalid Phone Number.')
    .max(10, 'Invalid Phone Number.')
    .required(),
};

export const getSubscriberSchema = yup.object({
  msisdn: schema.phoneNumber,
});
