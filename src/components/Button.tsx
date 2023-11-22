import React, { ReactNode } from 'react'
interface Props {
    children : any
    type?: string
}
const Button = ({children , type: color = "primary"}:Props) => {
  return (
    <button type="button" className={"btn btn-"+color}>{children}</button>
  )
}

export default Button