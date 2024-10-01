import React from 'react'

const Button = ({buttonText,buttonStyle,clickHandler,disable}) => {
 
  return (
    <div>
      <button disabled={disable}  onClick={clickHandler} className={`${buttonStyle ? buttonStyle : "bg-yellow-300 text-black h-9 p-2 flex items-center"}`}>{buttonText}</button>
    </div>
  )
}

export default Button
