import { toast } from 'react-toastify'

import { Images } from '../../../../utils/images/images_import'

import { Container, Img } from "../style"
import Input from '../../../atomics/Input'
import Form from '../../../generics/Form'

import { useState } from 'react'
import Button from '../../../atomics/Button'
import LinkToogle from '../../../atomics/LinkToogle'
import services from '../../../../services/services'

import useAuth from '../../../../hooks/useAuth'

import { useNavigate } from 'react-router-dom'

export default function Login() {
	const navigate = useNavigate()
	const { login, setName } = useAuth()

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	async function handleSubmit(event) {
		event.preventDefault()

		try {
			const promise = await services.login({ email, password })

			login(promise.data.token)

			setName(promise.data.user.name)

			navigate('/home')

			toast.success('Logado com sucesso!')
		} catch(error) {
			toast.error('Email e senha inválido')
		}
	}

	return (
		<Container>
			<Img src={Images['Logo']} width="147" />

			<Form width="85" onSubmit={handleSubmit} >
				<Input type="email" placeholder="E-mail" value={email} setValue={setEmail} />
				<Input type="password" placeholder="Senha" value={password} setValue={setPassword} />

				<Button value="Entrar" width="100" type="submit" />
			</Form>

			<LinkToogle register={false} path="/register" />
		</Container>
	)
}