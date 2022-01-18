import React from "react";
import { DisplayForm } from './DisplayForm'
import StyledButton from '../UI/StyledButton'
import FormInputFields from './FormInputFields'

function AddItemForm({ addFunc }: { addFunc: Function }) {

  const initState = {
    showForm: true,
    url: '',
    urlDesc: '',
    isWaiting: false,
    validationMessage: ''
  }

  //TODO: onSuccess 
  const onSubmit = (values, updateValues) => {
    const newBookmark = {
      url: values.url,
      urlDesc: values.urlDesc,
      created: + new Date()
    }
    addFunc(newBookmark)
    updateValues({ url: '', urlDesc: '' })
  }

  const AddFormButtons = ({ values, updateValues }) => {
    return (<StyledButton key={'key' + 'addButton'} type='submit' wait={values.isWaiting} disabled={values.isWaiting}>
      {values.isWaiting ? 'wait' : 'add'}
    </StyledButton>
    )
  }

  //TODO: onSuccess 
  return (
    <DisplayForm initState={initState} onSubmit={onSubmit}>
      <FormInputFields />
      <AddFormButtons />
    </DisplayForm>
  )

}

export default AddItemForm;