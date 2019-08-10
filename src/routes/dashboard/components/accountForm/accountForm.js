import React from 'react'
import { Formik, Form, Field} from 'formik'
export default function accountForm({handleForm , closeDialog}) {
    let initialValues = {
        accountName:""
    }
    return (
        <Formik
        initialValues={initialValues}
        onSubmit={(values, actions, closeDialog)=>{
                  actions.setSubmitting(true)
                  handleForm(values)
                  actions.setSubmitting(false)
                  closeDialog()
        }}
        render={
            ({ handleReset,
                handleBlur,
                handleSubmit,
                handleChange,
                values}
            )=>(
        <Form>
            <div className="field">
                <div className="control">
                   <Field
                    name="accountName"
                    type="text"
                    placeholder="Account name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.accountName}
                    className="input"
                   />
                 </div>
             </div>
             <div className="field is-grouped">
                 <div className="buttons">
                    <button className="button is-primary" type="submit">
                     Create account
                     </button>
                    <button className="button is-light">Reset</button>
                 </div>
             </div>
        </Form>
            )
        }
        >

        </Formik>
    )
}
