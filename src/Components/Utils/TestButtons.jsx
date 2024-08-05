import React from 'react'

export default function TestButton({ icon, label, onClick, className }) {
  return (
    <button
       label = {label}
       className= {`bg-blue-600 hover:bg-blue-700 ${className}` }
       onClick={onClick}>
    {icon && <span>{icon}</span>}
    {label}
    </button>
  )
}
