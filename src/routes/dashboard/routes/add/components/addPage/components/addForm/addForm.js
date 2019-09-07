import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Form, Field } from 'formik'
import Button from '@material-ui/core/Button'

function addForm({classes, firestore, handleForm}) {
    const initialValues = {
        title: '',
        description: '',
        currentPrice: '',
        previousPrice: '',
        location: ''
      }
    return (
       <Formik
       initialValues={initialValues}
       onSubmit={
           (values, actions) => {
            actions.setSubmitting(true)
            handleForm(values)
            actions.resetForm()
            actions.setSubmitting(false)
           }
       }
       render={
           ({
               handleChange,
               handleBlur,
               handleReset,
               values,
               handleSubmit,
           }) => (
               <Form className={classes.root}>
                 <Field
                  name="title"
                  type="text"
                  placeholder="Title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                 />  

                 <Field
                  name="description"
                  component="textarea"
                  placeholder="Deacription"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                 />  

                <Field
                  name="currentPrice"
                  placeholder="Current Price"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.currentPrice}
                 />  

                <Field
                  name="previousPrice"
                  placeholder="Previous Price (Optional)"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.previousPrice}
                 /> 

                 <Field
                  name="location"
                  placeholder="Location"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.location}
                 />  

                 <Button type="submit">
                     Submit
                 </Button>
               </Form>

           )
       }
       />
    )
}

addForm.propTypes = {

}

export default addForm

