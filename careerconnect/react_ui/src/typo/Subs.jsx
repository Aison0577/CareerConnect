import React from 'react'

export default function Subs({text,otherStyles}) {
  return (
    <h1 className={`font-montserrat font-medium text-sm my-2 text-gray ${otherStyles}`}>
      {text}
    </h1>
  )
}
