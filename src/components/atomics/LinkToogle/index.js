import { StyledLink } from "../../../css/style"
import { LinkToogleStyle } from "./style"

export default function LinkToogle({ register, path }) {
  return (
    <StyledLink to={path}>
      <LinkToogleStyle>
        {register ?  "Já tem uma conta? Entre agora!" : "Primeira vez? Cadastre-se!" }
      </LinkToogleStyle>
    </StyledLink>

  )
}
