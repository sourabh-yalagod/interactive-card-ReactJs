import React, { useEffect, useRef, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Card from './card';

function Form() {
  const [formValues, setFormValues] = useState({
    name: '',
    number: '',
    month: '',
    year: '',
    cvv: '',
  });
  const nameRef = useRef(null);

  const validationSchema = Yup.object({
    name: Yup.string().required('Cardholder name is required')
      .matches(/^[A-Za-z]+(?: [A-Za-z]+)?$/, 'Invalid name'),
  
    number: Yup.string().required('Card number is required')
      .matches(/^(\d{4} ?){3}\d{4}$/, 'Must be a valid 16-digit card number'),
  
    month: Yup.string().required('Month is required')
      .matches(/^(0?[1-9]|1[0-2])$/, 'Invalid month'),
  
    year: Yup.string().required('Year is required')
      .matches(/^\d{4}$/, 'Invalid year'),
  
    cvv: Yup.string().required('CVV is required'),
  });
  

  const { values, errors, handleChange, handleBlur, touched , handleSubmit } = useFormik({
    initialValues: formValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission
      console.log('Form submitted with values:', values);
    },
  });
  
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    handleChange(e);
  };
  return (
    <div className="sm:flex sm:justify-between h-screen">
      <Card formData={values} />
      <form className="grid px-5 gap-4 pt-4 sm:h-[300px] my-auto mx-auto" id="details" onSubmit={handleSubmit}>
      <div>
        <p className="text-[11px] uppercase text-blue-900 font-bold">cardholder name</p>
        <input
          type="text"
          placeholder="e.g. jane appleseed"
          name="name"
          className={`w-full rounded-[6px] border-[1px] border-gray text-left p-2 text-[15px] outline-none ${
            errors.name && touched.name ? 'border-red-500' : touched.name ? 'border-green-500' : ''
          }`}
          onChange={onChange}
          onBlur={handleBlur}
          value={values.name}
          ref={nameRef}
        />
        {errors.name && touched.name && <p className="text-red-500 text-[12px]">{errors.name}</p>}
      </div>
      <div>
        <p className="text-[11px] uppercase text-blue-900 font-bold">card number</p>
        <input
          type="text"
          placeholder="e.g. jane appleseed"
          name="number"
          className={`w-full rounded-[6px] border-[1px] border-gray text-left p-2 text-[12px] outline-none ${
            errors.number&& touched.number ? 'border-red-500' : touched.number ? 'border-green-500' : ''
          }`}
          onChange={onChange}
          onBlur={handleBlur}
          value={values.number}
        />
        {errors.number && touched.number && <p className="text-red-500 font-semibold text-[11px]">{errors.number}</p>}
      </div>
      <div className="flex justify-between">
        <div className='relative'>
          <p className="text-[11px] uppercase text-blue-900 font-bold">exp. date (mm/yy)</p>
          <p className="flex gap-7">
            <input
              type="number"
              className={`p-1 max-w-30 w-20 border-[1px] border-gray rounded-sm text-[11px] text-center outline-none relative ${
                errors.month && touched.month ? 'border-red-500' : touched.month ? 'border-green-500' : ''
              }`}
              placeholder="MM"
              name="month"
              onChange={onChange}
              onBlur={handleBlur}
              value={values.month}
            />
            {errors.month && touched.month && <p className="absolute bottom-[-2px] text-red-500 font-semibold text-[11px]">{errors.month}</p>}
            <input
              type="number"
              className={`p-1 max-w-30 w-20 border-[1px] border-gray rounded-sm text-[11px] text-center outline-none ${
                errors.year&& touched.year ? 'border-red-500' : touched.year ? 'border-green-500' : ''
              }`}
              placeholder="YY"
              name="year"
              onChange={onChange}
              onBlur={handleBlur}
              value={values.year}
            />
            {errors.year && touched.year && <p className="absolute bottom-[-2px] right-0 text-red-500 font-semibold text-[11px]">{errors.year}</p>}
          </p>
        </div>
        <div className='relative'>
          <p className="text-[11px] uppercase text-blue-900 font-bold">cvv</p>
          <input
            type="number"
            className={`p-1 border-[1px] border-gray max-w-30 w-20 rounded-sm text-[13px] font-semibold pl-2 outline-none ${
              errors.cvv && touched.cvv ? 'border-red-500' : touched.cvv ? 'border-green-500' : ''
            }`}
            placeholder="e.g. 123"
            name="cvv"
            onChange={onChange}
            onBlur={handleBlur}
            value={values.cvv}
          />
          {errors.cvv && touched.cvv && <p className="text-red-500 font-semibold text-[11px]">{errors.cvv}</p>}
        </div>
      </div>
      <div className="w-full">
        <button
          className="w-full m-auto bg-blue-500 py-2 text-White text-[14px] tracking-widest rounded-[7px] font-semibold"
          id="Confirm"
          type="submit"
        >
          Confirm
        </button>
      </div>
      </form>
    </div>
  );
}

export default Form;
