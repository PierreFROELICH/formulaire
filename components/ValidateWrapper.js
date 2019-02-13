import React from 'react'
import Validation from './Validation.js'

export default function Validate(fieldnName, value) {
  var formValues = {}
  formValues[fieldName] = value

  var formFields = {}
  formValues[fieldName] = validation[field]

  const result = validatejs(formFields, formFields)
  if (result) {
    return result[field][0]
  }
return null
}
