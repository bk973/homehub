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
            <label htmlFor={props.id || props.name}>{label}</label>
            <input {...field} {...props} className="p-2 border-2 border-gray-400 focus:ring-indigo-700" />
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
            <label htmlFor={props.id || props.name}>{label}</label>
            <textarea {...field} {...props} className="p-2 border-2 border-gray-400 focus:ring-indigo-700" />
            {/**display field errors, if any... */}
            {meta.touched && meta.error ? (<div className="text-red-500">{meta.error}</div>) : null}
        </div>
    )
}
  
  export const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <div className="flex flex-col space-y-2">
        <label htmlFor={props.id || props.name}>{label}</label>
        <select {...field} {...props} className="p-2 border-2 border-gray-400 focus:ring-indigo-700" />
        {meta.touched && meta.error ? (
          <div className="text-red-500">{meta.error}</div>
        ) : null}
      </div>
    );
  };