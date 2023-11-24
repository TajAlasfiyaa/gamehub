import React, { ReactNode } from 'react'
interface Props {
    children : any
    type?: string
    onClick:() => void
}
const Button = ({children , type: color = "primary" , onClick: onClick}:Props) => {
  return (
    <button onClick={onClick} type="button" className={"btn btn-"+color}>{children}</button>
  )
}

export default Button