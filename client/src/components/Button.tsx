import React, { type ReactElement } from 'react'


interface ButtonProps {
    startIcon:ReactElement,
    text:string
}
export const Button = (props:ButtonProps) => {
  return (
    // <div className="flex items-center justify-center gap-1 rounded-xl bg-gray-800 p-2">
    <div className=" flex  justify-center items-center px-2 py-2 font-semibold text-white transition-colors border-2 border-gray-800 rounded-2xl hover:bg-primary gap-1">
      {props.startIcon} {props.text}
    </div>
  );
}
