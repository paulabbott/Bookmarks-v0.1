import React from "react";
import { DisplayForm } from './displayForm'

function AddBookmark({ addFunc }) {

  const buttons = [{
    type: 'submit',
    value: 'add',
    func: addFunc,
    afterFunc: 'reset'
  }]

  return DisplayForm(buttons)
}

export default AddBookmark;