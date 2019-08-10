import React from 'react'
import { Formik, Field, Form } from 'formik'
import './loginForm.scss'

export default function loginForm() {
    let initialValues = {
        email: "",
        password: ""
    }
    return (
       <Formik
       initialValues={initialValues}
       onSubmit={()=>{}}
       render={({
        handleReset,
        handleBlur,
        handleSubmit,
        handleChange,
        values
       })=>(
           <Form className="login-form">
             <div className="field">
                 <div className="control">
                   <Field
                    name="email"
                    type="text"
                    placeholder="Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.intro}
                    className="input"
                   />
                 </div>
             </div>
             <div className="field">
                 <div className="control">
                   <Field
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.intro}
                    className="input"
                   />
                 </div>
             </div>
             <div className="field">
                <button type="submit" className="button is-primary">
                  Login
                </button>
             </div>
           </Form>
       )}
       >
       </Formik>
    )
}
