//deps...
import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Form } from 'formik'
import * as yup from 'yup'
//utils for forms
import {
    MyTextInput,
    MySelect,
    MyTextArea,
    FileUpload
} from '../../../../../../../../utils/forms'
//dashboard path from constant
import { DASHBOARD_PATH } from '../../../../../../../../constants/paths'

//component
export default function AddForm({ handleSubmit }) {
    return (
        <div>
            <Formik
                initialValues={{
                    title: '',
                    description: '',
                    location: '',
                    currentPrice: '',
                    previousPrice: '',
                    currency: 'ugx'
                }}
                validationSchema={yup.object({
                    title: yup.string('Please use letters or numbers')
                        .max(25, 'must be 25 characters or less')
                        .required('Please fill in title'),

                    description: yup.string('Please use letters or numbers')
                        .max(100, 'Must be 100 characters or less')
                        .required('Please fill in description'),

                    location: yup.string()
                        .required('Please select a location'),

                    currentPrice: yup.number()
                        .min(6, 'Must be 6 digits or more')
                        .required('Current Price is required'),

                    currentPrice: yup.number(),

                    currency: yup.string()
                        .oneOf(['ugx', 'usd'])
                        .required('Please fill in currency'),
                })}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setSubmitting(true)
                    handleSubmit(values)
                    setSubmitting(false)
                    resetForm(values)
                }}
              >{
                    ({setFieldValue, values}) => (

                        <Form className="flex flex-col space-y-6 md:space-y-10 w-full">
                            <MyTextInput
                                label="What title do you want for your listing?"
                                name="title"
                                type="text"
                                placeholder="E.g Spacious 4 Bedroom appartment..."
                            />
                            <MyTextArea
                                label="What's so special about this property?"
                                placeholder="A little more description doesn't hurt!"
                                name="description"
                                className="p-2 border-2 border-gray-400 focus:ring-indigo-700"
                            />
                            <MySelect label="Choose a location" name="location">
                                <option>Select a location</option>
                                <option value="kampala">Kampala</option>
                                <option value="jinja">Jinja</option>
                                <option value="iganga">Iganga</option>
                            </MySelect>
                            <MyTextInput
                                label="Set a price for your property"
                                type="text"
                                placeholder="Minimum is UGX 100,000"
                                name="currentPrice"
                            />
                            <MyTextInput
                                label="Previous price (This is optional)"
                                type="text"
                                placeholder="Minimum is UGX 100,000"
                                name="previousPrice"
                            />
                            <MySelect label="What currency should buyers use?" name="currency">
                                <option value="ugx">UGX</option>
                                <option value="ugx">USD</option>
                            </MySelect>
                            <div>
                                <button type='submit' className="flex shadow-lg rounded-lg border justify-center px-6 py-4 bg-indigo-500 text-white font-bold font consolas">
                                    List for sale
                       </button>
                            </div>
                        </Form>
                    )
                }

            </Formik>
        </div>

    )
}