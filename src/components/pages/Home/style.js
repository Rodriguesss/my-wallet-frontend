import styled from "styled-components";

const HomeStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 13px;

    margin: 0 auto;
    padding: 25px 0 20px 0;

    height: 100vh;
    width: 90%;
`

const HomeHeader = styled.div`
    margin-bottom: 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    font-weight: bold;
`

const DataContainer = styled.div`
    position: relative;

    height: 70vh;

    display: flex;
    flex-direction: column;
    justify-content: ${({wallets}) => wallets.length === 0 ? `center` : `flex-start`};
    gap: 30px;
    
    padding: 15px 10px 10px 10px;
    
    background-color: #FFF;
    border-radius: 5px;
    
    span {
        padding: 50px;

        font-size: 20px;
        color: #868686;
        text-align: center;
    }
`

const ContainerOperationBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const OperationBox = styled.div`
    height: 17vh;
    width: 48%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 10px;

    background-color: #A328D6;
    border-radius: 5px;

    cursor: pointer;

    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

    p {
        padding-right: 60px;

        word-wrap: break-word;
        font-size: 17px;
        font-weight: bold;
        line-height: 19.96px;
        color: #FFF;
    }

    :hover {
        background-color: #9F46D2;

        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    }
`

const WalletItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
        display: flex;
        gap: 10px;

        p:nth-child(1) {
            color: #C6C6C6;
        }

        p:nth-child(2) {
            color: #000;
        }
    }
    
    span {
        display: flex;

        font-size: 16px;
        padding: 0;

        color: ${({operation}) => operation === 'entrada' ? `#6CBE31` : `#C70000`};
    }
`

const TotalStyle = styled.div`
    position: absolute;
    bottom: 10px;
    left: 0;

    width: 100%;

    div {
        display: flex;
        justify-content: space-between;

        padding: 0 10px;
    }

    font-size: 17x;
    font-weight: bold;

    p:nth-child(1) {
        color: #000000;
    }

    p:nth-child(2) {
        color: ${({operation}) => operation === 'entrada' ? `#6CBE31` : `#C70000`};
    }
`

export {
    HomeStyle,
    HomeHeader,
    DataContainer,
    OperationBox,
    ContainerOperationBox,
    WalletItem,
    TotalStyle
}