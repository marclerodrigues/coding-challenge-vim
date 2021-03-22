import React from 'react'
import ReactDOM from 'react-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import axios from 'axios'

const TweetForm = ({ onCreate, tweets }) => {
  const validate = (values) => {
    const errors = {}

    if (!values.body) {
      errors.body = 'Required'
    }

    return errors
  }

  const onSubmit = (values, { setSubmitting, setFieldError, resetForm }) => {
    const csrfToken = document.querySelector('meta[name=csrf-token]').content

    axios
      .post("/tweets", { tweet: values }, { headers: { 'X-CSRF-TOKEN': csrfToken }})
      .then(({ data }) => {
        onCreate([...tweets, data])
        resetForm()
      })
      .catch(({ response: { data: { errors } } }) => {
        Object.entries(errors).forEach(([err, message]) => {
          setFieldError(err, message[0])
        })
      })
      .finally(() => setSubmitting(false))
  }

  return (
    <div>
      Enter your tweet:
      <Formik
       initialValues={{ body: '' }}
       validate={validate}
       onSubmit={onSubmit}
     >
       {({ isSubmitting }) => (
         <Form>
           <Field type="text" name="body" autoComplete="off" />
           <ErrorMessage name="body" component="div" />
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </Form>
       )}
     </Formik>
    </div>
  )
}

export default TweetForm
