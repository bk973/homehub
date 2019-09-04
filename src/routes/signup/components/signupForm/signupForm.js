import React from 'react'
import { Formik, Form , Field} from 'formik'

export default function signupForm({handleSubmit}) {
    let initialValues = {
        email: "",
        username: "",
        password: ""
    }
    return (
        <Formik
         initialValues={initialValues}
         onSubmit={(values, actions)=>{
          actions.setSubmitting(true)
          handleSubmit(values)
          actions.resetForm()
          actions.setSubmitting(false)
         }}
         render={({
            handleReset,
            handleBlur,
            handleSubmit,
            handleChange,
            values
         })=>(
            <Form className="signup-form">
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
                   name="username"
                   type="text"
                   placeholder="Username"
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
