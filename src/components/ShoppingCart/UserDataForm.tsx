import React from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as yup from 'yup';

const emailRegEx =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

// eslint-disable-next-line
const phoneRegEx = /^[\+]{0,1}380([0-9]{9})$/;

const validationSchema = yup.object().shape({
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

const initialValues = {
  name: '',
  email: '',
  phone: '',
  address: '',
};

const UserDataForm: React.FC = () => {
  const handleSubmit = () => {};

  return (
    <section className="section w-[calc(30%-10px)] h-[600px]">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid, touched }) => {
          const areFieldsUntouched =
            !touched.name && !touched.email && !touched.phone && !touched.address;

          return (
            <Form name="OrederForm" className="relative flex flex-col justify-center w-full">
              <div className="relative flex flex-col mb-5">
                <label htmlFor="name" className="mb-2">
                  Name <span className="text-blue-main">*</span>
                </label>
                <Field
                  className="px-3 py-2 text-sm text-black outline-none rounded"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  autoComplete="off"
                />
                <ErrorMessage name="name" component="div" className="text-sm text-blue-main" />
              </div>

              <div className="relative flex flex-col mb-5">
                <label htmlFor="email" className="mb-2">
                  Email <span className="text-blue-main">*</span>
                </label>
                <Field
                  className="px-3 py-2 text-sm text-black outline-none rounded"
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Enter your email"
                  autoComplete="off"
                />
                <ErrorMessage name="email" component="div" className="text-sm text-blue-main" />
              </div>

              <div className="relative flex flex-col mb-5">
                <label htmlFor="phone" className="mb-2">
                  Phone <span className="text-blue-main">*</span>
                </label>
                <Field
                  className="px-3 py-2 text-sm text-black outline-none rounded"
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder="Enter your phone"
                  autoComplete="off"
                />
                <ErrorMessage name="phone" component="div" className="text-sm text-blue-main" />
              </div>

              <div className="relative flex flex-col mb-5">
                <label htmlFor="address" className="mb-2">
                  Address <span className="text-blue-main">*</span>
                </label>
                <Field
                  className="px-3 py-2 text-sm text-black outline-none rounded"
                  id="address"
                  name="address"
                  type="text"
                  placeholder="Enter your address"
                  autoComplete="off"
                />
                <ErrorMessage name="address" component="div" className="text-sm text-blue-main" />
              </div>

              <button
                type="submit"
                disabled={areFieldsUntouched || !isValid}
                className="font-md text-white border bg-blue-sky border-transparent rounded px-4 py-2 overflow-hidden transition-all duration-600 relative z-50 
          disabled:after:hidden disabled:bg-grey-main disabled:text-grey-light
          after:h-0  after:w-full after:absolute after:left-0 after:top-1/2 after:-z-10 after:bg-blue-main active:after:bg-blue-main 
          hover:after:content-[''] hover:after:w-full hover:after:left-0 hover:after:top-0 hover:after:block hover:after:h-full  after:transition-all after:duration-600"
              >
                {/* {isFetchingUser ? (
                  <BeatLoader
                    cssOverride={{
                      textAlign: 'center',
                    }}
                    color="#D4DFFF"
                    size="6px"
                  />
                ) : (
                  'SignUp'
                )} */}
                sdadasd
              </button>
            </Form>
          );
        }}
      </Formik>
    </section>
  );
};

export default UserDataForm;
