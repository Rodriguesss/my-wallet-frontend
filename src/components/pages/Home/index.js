import useAuth from "../../../hooks/useAuth"

import Title from "../../atomics/Title"
import Icon from "../../atomics/Icon"

import { AddCircleOutline, RemoveCircleOutline } from 'react-ionicons'

import { ContainerOperationBox, DataContainer, HomeHeader, HomeStyle, OperationBox, TotalStyle, WalletItem } from "./style"
import { Images } from '../../../utils/images/images_import'
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import services from "../../../services/services"
import { toast } from "react-toastify"

export default function Home() {
	const { token, logout } = useAuth()

	const [wallets, setWallets] = useState([])
	const { name, setDeposit } = useAuth()

	const navigate = useNavigate()

	useState(async () => {
		const promise = await services.getWallets(token)

		setWallets(promise.data)
	}, [])

	async function handleOperation(boolean) {
		setDeposit(boolean)

		navigate('/monetary_operation')
	}

	function handleLogout() {
		logout()

		navigate('/')

		toast.success('Você deslogou com sucesso!')
	}

	function handleTotal() {
		let total = 0
		let operation = 'saída' 

		wallets.forEach(({operation, price}) => {
			operation === 'entrada' && (total += parseFloat(price.replace(",", '.')))
			operation === 'saída' && (total -= parseFloat(price.replace(",", '.')))
		})

		total >= 0 && (operation = 'entrada')
		total = total.toFixed(2).replace(".", ",")

		return { total, operation }
	  }

	return (
		<HomeStyle>
			<HomeHeader>
				<Title>Olá, {name}</Title>
				<Icon src={Images['Logout']} onClick={handleLogout} />
			</HomeHeader>

			<DataContainer wallets={wallets}>
				{wallets.length === 0
					? (<span>Não há registros de entrada ou saída</span>)
					: wallets.map(({ date, operation, description, price }, index) => (
						<WalletItem key={index} operation={operation}>
							<div>
								<p>{date}</p>
								<p>{description}</p>
							</div>
							<span>{price}</span>
						</WalletItem>
					))}

				<TotalStyle operation={handleTotal().operation}>
					<div>
						<p>SALDO</p>
						<p>{handleTotal().total}</p>
					</div>
				</TotalStyle>
			</DataContainer>

			<ContainerOperationBox>
				<OperationBox>
					<AddCircleOutline
						color={'#FFF'}
						height="25px"
						width="25px"
						onClick={() => handleOperation(true)}
					/>
					<p>Nova entrada</p>
				</OperationBox>

				<OperationBox>
					<RemoveCircleOutline
						color={'#FFF'}
						height="25px"
						width="25px"
						onClick={() => handleOperation(false)}
					/>
					<p>Nova saída</p>
				</OperationBox>
			</ContainerOperationBox>
		</HomeStyle>
	)
}