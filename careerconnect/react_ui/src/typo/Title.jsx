import React from 'react'

export default function Title({text,otherStyles}) {
  return (
    <h1 className={`font-poppins font-bold text-2xl md:text-3xl lg:text-4xl ${otherStyles}`}>
      {text}
    </h1>
  )
}
