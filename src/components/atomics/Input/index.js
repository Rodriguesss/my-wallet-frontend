import { InputStyle } from './style'

export default function Input({ type, placeholder, value, setValue }) {
  return (
    <InputStyle type={type} placeholder={placeholder} value={value} 
    onChange={({target}) => setValue(target.value)} />
  )
}