import React, { useState } from 'react'

const FormInput = (props) => {
  const [focused, setFocused] = useState(false)

  const handleFocus = (e) => {
    setFocused(true)
  }

  const { label, errorMessage, onChange, ...inputProps } = props
  return (
    <div>
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <span className='text-[#F83F23] text-xs span'>{errorMessage}</span>
    </div>
  )
}

export default FormInput
