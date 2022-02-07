import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

import useAuth from "../../../hooks/useAuth"
import services from "../../../services/services"
import Button from "../../atomics/Button"
import Input from "../../atomics/Input"
import Title from "../../atomics/Title"
import Form from "../../generics/Form"
import { MonetaryOperationStyle, MonetaryOperationHeader } from "./style"


export default function MonetaryOperation() {
	const { deposit, token } = useAuth()

	const [price, setPrice] = useState()
	const [description, setDescription] = useState()
	const [operation] = useState(deposit ? "entrada" : "saída")

	const navigate = useNavigate()

	async function handleOperation(event) {
		event.preventDefault()

		try {
			await services.postRegistry({ description, price, operation }, token)

			navigate('/home')

			toast.success('Operação realizada com sucesso!')
		} catch {
			toast.error('A descrição da operação deve conter no minimo 5 caracteres e no maximo 20.')
		}
	}

	return (
		<MonetaryOperationStyle>
			<MonetaryOperationHeader>
				<Title>{`Nova ${operation}`}</Title>
			</MonetaryOperationHeader>

			<Form width="100" onSubmit={handleOperation}>
				<Input placeholder="Valor" type="number" value={price} setValue={setPrice} />
				<Input placeholder="Descrição" type="text" value={description} setValue={setDescription} />

				<Button value={`Salvar ${operation}`} type="submit" width="100" />
			</Form>
		</MonetaryOperationStyle>
	)
}