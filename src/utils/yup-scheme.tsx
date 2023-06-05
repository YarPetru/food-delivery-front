import * as yup from 'yup';
import { emailRegEx, phoneRegEx } from './constants';

export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Name is too short - should be 2 chars minimum')
    .required('Name is a required field'),
  email: yup
    .string()
    .min(2, 'Email is too short - should be 2 chars minimum')
    .max(60, 'Email is too long - no more than 60 chars')
    .email('Enter a valid email')
    .matches(emailRegEx, 'Email must be a valid according to RFC2822')
    .required('Email is a required field'),
  phone: yup
    .string()
    .matches(phoneRegEx, 'Phone should be 13 chars and start with +380')
    .required('Phone is a required field'),
  address: yup
    .string()
    .min(1, 'Address is too short - should be 10 chars minimum')
    .max(200, 'Address is too long - no more than 200 chars')
    .required('Address is a required field'),
});
