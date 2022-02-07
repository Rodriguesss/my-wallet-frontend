import useAuth from "../../../hooks/useAuth"

import Title from "../../atomics/Title"
import Icon from "../../atomics/Icon"

import { AddCircleOutline, RemoveCircleOutline } from 'react-ionicons'

import { ContainerOperationBox, DataContainer, HomeHeader, HomeStyle, OperationBox } from "./style"
import { Images } from '../../../utils/images/images_import'
import { useNavigate } from "react-router-dom"

export default function Home() {
	const { name, setDeposit } = useAuth()

	const navigate = useNavigate()

	async function handleOperation(boolean) {
		setDeposit(boolean)

		navigate('/monetary_operation')
	}

	return (
		<HomeStyle>
			<HomeHeader>
				<Title>Olá, {name}</Title>
				<Icon src={Images['Logout']} />
			</HomeHeader>

			<DataContainer >
				<span>Não há registros de entrada ou saída</span>
			</DataContainer>

			<ContainerOperationBox>
				<OperationBox>
					<AddCircleOutline
						color={'#FFF'}
						height="25px"
						width="25px"
						onClick={() => handleOperation(true) }
					/>
					<p>Nova entrada</p>
				</OperationBox>

				<OperationBox>
					<RemoveCircleOutline
						color={'#FFF'}
						height="25px"
						width="25px"
						onClick={() => handleOperation(false) }
					/>
					<p>Nova saída</p>
				</OperationBox>
			</ContainerOperationBox>
		</HomeStyle>
	)
}