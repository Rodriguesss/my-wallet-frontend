import styled from "styled-components";

export const FormStyle = styled.form`
  width: ${({width}) => width}%;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`