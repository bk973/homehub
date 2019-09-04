import React from 'react'
import { Formik, Form, Field } from 'formik' 


export default function addForm({handleForm}) {
        const initialValues = {
            title: "",
            description: "",
            location: "",
            currentPrice: "",
            previousPrice: ""
      }
      return (<Formik
      initialValues={ initialValues }
      onSubmit={(values, actions) => {
                actions.isSubmitting = true
                handleForm(values)
                actions.isSubmitting = false
      }}
      render={
         ({
           handleReset,
           handleBlur,
           handleSubmit,
           handleChange,
           values
         })=>(
            <Form>
                <div className="field">
                <label className="label">Title</label>
                   <div className="control">
                     <Field
                      name="title"
                      type="text"
                      placeholder="Title"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.title}
                      className="input"
                     />
                   </div>
               </div>
               <div className="field">
               <label className="label">Description</label>

                   <div className="control">
                     <Field
                      name="description"
                      type="text"
                      placeholder="Tell us a little about the home you are listing"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.description}
                      component="textarea"
                      className="textarea"
                     />
                   </div>
               </div>
               <div className="field">
               <label className="label">Location</label>

                   <div className="control">
                     <Field
                      name="location"
                      type="text"
                      placeholder="Where is it located?"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.location}
                      className="input"
                     />
                   </div>
               </div>
               <div className="field">
               <label className="label">Current Price</label>

                   <div className="control">
                     <Field
                      name="currentPrice"
                      type="text"
                      placeholder="Current price"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.currentPrice}
                      className="input"
                     />
                   </div>
               </div>
               <div className="field">
               <label className="label">Previous price (optional)</label>

                   <div className="control">
                     <Field
                      name="previousPrice"
                      type="text"
                      placeholder="Prevoius price (Optional)"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.previousPrice}
                      className="input"
                     />
                   </div>
               </div>
               <div className="field is-grouped">
                   <div className="buttons">
                      <button className="button is-primary" type="submit">Submit</button>
                      <button className="button is-light" type="submit">Reset</button>
                   </div>
               </div>
            </Form>
         )
      }
      />)
}
