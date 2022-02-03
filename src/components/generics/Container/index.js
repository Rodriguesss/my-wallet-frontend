import { ContainerStyle } from './style'

export default function Container({ children }) {
  return (
    <ContainerStyle>
      {children}
    </ContainerStyle>
  )
}