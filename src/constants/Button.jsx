import React from 'react'

const Button = ({ uniqueStyle, buttonText }) => {
  return (
    <button className={`font-bold py-2 px-4 border-b-4 rounded ${uniqueStyle}`}>
        {buttonText}
    </button>
  )
}

export default Button