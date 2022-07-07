import React from 'react'
import Checkbox from './components/Checkbox'
import DatePicker from './components/DatePicker'
import Dropdown from './components/Dropdown'
import Radio from './components/Radio'
import Textbox from './components/Textbox'

const Form = () => {
  return (
    <div>
        <Textbox/>
        <Radio/>
        <Checkbox/>
        <DatePicker/>
        <Dropdown/>
    </div>
  )
}

export default Form