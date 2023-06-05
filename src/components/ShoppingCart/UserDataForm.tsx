import React from 'react';
import { useAppSelector } from 'hooks/redux-hooks';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import { validationSchema } from 'utils/yup-scheme';

import { getCurrentOrder } from 'store/order';

const initialValues = {
  name: '',
  email: '',
  phone: '',
  address: '',
};

const UserDataForm: React.FC = () => {
  const handleSubmit = () => {};
  const { data: currentOrder } = useAppSelector(getCurrentOrder);
  const isShoppingCartEmpty = currentOrder.length === 0;

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
                  Name <span className="error-validation">*</span>
                </label>
                <Field
                  className="text-input"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  autoComplete="off"
                />
                <ErrorMessage name="name" component="div" className="error-validation" />
              </div>

              <div className="relative flex flex-col mb-5">
                <label htmlFor="email" className="mb-2">
                  Email <span className="error-validation">*</span>
                </label>
                <Field
                  className="text-input"
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Enter your email"
                  autoComplete="off"
                />
                <ErrorMessage name="email" component="div" className="error-validation" />
              </div>

              <div className="relative flex flex-col mb-5">
                <label htmlFor="phone" className="mb-2">
                  Phone <span className="error-validation">*</span>
                </label>
                <Field
                  className="text-input"
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder="Enter your phone"
                  autoComplete="off"
                />
                <ErrorMessage name="phone" component="div" className="error-validation" />
              </div>

              <div className="relative flex flex-col mb-5">
                <label htmlFor="address" className="mb-2">
                  Address <span className="error-validation">*</span>
                </label>
                <Field
                  className="text-input"
                  id="address"
                  name="address"
                  type="text"
                  placeholder="Enter your address"
                  autoComplete="off"
                />
                <ErrorMessage name="address" component="div" className="error-validation" />
              </div>

              <button
                type="submit"
                disabled={isShoppingCartEmpty || areFieldsUntouched || !isValid}
                className="font-md text-white border bg-blue-sky border-transparent rounded px-4 py-2 overflow-hidden transition-all duration-600 relative z-50 
          disabled:after:hidden disabled:bg-grey-main disabled:text-grey-light
          after:h-0  after:w-full after:absolute after:left-0 after:top-1/2 after:-z-10 after:bg-blue-main active:after:bg-blue-main 
          hover:after:content-[''] hover:after:w-full hover:after:left-0 hover:after:top-0 hover:after:block hover:after:h-full  after:transition-all after:duration-600"
              >
                {/* {isPending ? (
                  <BeatLoader
                    cssOverride={{
                      textAlign: 'center',
                    }}
                    color="#64829B"
                    size="6px"
                  />
                ) : (
                  'Confirm order'
                )} */}
                Confirm order
              </button>
            </Form>
          );
        }}
      </Formik>
    </section>
  );
};

export default UserDataForm;
