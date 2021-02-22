import React, { useState, useEffect} from 'react'
import {useField} from 'formik'
import {useDropzone} from 'react-dropzone'

export function MyTextInput({ label, ...props }) {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    let [field, meta] = useField(props)
    return (
        <div className="flex flex-col space-y-2">
            <label htmlFor={props.id || props.name} className="text-gray-600 font-bold">{label}</label>
            <input {...field} {...props} className="rounded-md focus:text-indigo-500 font-medium p-2.5 border-2 border-gray-300 focus:ring-indigo-500 focus:font-bold" />
            {/**display field errors, if any... */}
            {meta.touched && meta.error ? (<div className="text-red-500">{meta.error}</div>) : null}
        </div>
    )
}

export function MyTextArea({ label, ...props }) {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    let [field, meta] = useField(props)
    return (
        <div className="flex flex-col space-y-2">
            <label htmlFor={props.id || props.name} className="text-gray-600 font-bold">{label}</label>
            <textarea {...field} {...props} className="rounded-md text-indigo-500 font-medium p-2.5 border-2 border-gray-300 focus:ring-indigo-500 focus:font-bold" />
            {/**display field errors, if any... */}
            {meta.touched && meta.error ? (<div className="text-red-500">{meta.error}</div>) : null}
        </div>
    )
}
  
  export const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <div className="flex flex-col space-y-2">
        <label htmlFor={props.id || props.name} className="text-gray-600 font-bold">{label}</label>
        <select {...field} {...props} className="p-2.5 font-medium rounded-md bg-indigo-500 text-white"/>
        {meta.touched && meta.error ? (
          <div className="text-red-500">{meta.error}</div>
        ) : null}
      </div>
    );
  };