import styled from "styled-components";

const MonetaryOperationStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 13px;

    margin: 0 auto;
    padding: 25px 0 20px 0;

    height: 100vh;
    width: 90%;
`

const MonetaryOperationHeader = styled.div`
    margin-bottom: 10px;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    width: 100%;

    font-weight: bold;
`

export {
    MonetaryOperationStyle,
    MonetaryOperationHeader
}