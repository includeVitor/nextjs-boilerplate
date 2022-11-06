import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children }: ButtonProps) => <button>{children}</button>

export default Button
