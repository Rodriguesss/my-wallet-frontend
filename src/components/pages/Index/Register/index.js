import { toast } from 'react-toastify'

import { Images } from '../../../../utils/images/images_import'

import { Container, Img } from "../style"
import Input from '../../../atomics/Input'
import Form from '../../../generics/Form'

import { useState } from 'react'
import Button from '../../../atomics/Button'
import services from '../../../../services/services'
import LinkToogle from '../../../atomics/LinkToogle'

import { useNavigate } from 'react-router-dom'

export default function Register() {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [passwordConfirm, setPasswordConfirm] = useState("")

	const navigate = useNavigate()

	const [internationalNameRegex] = useState(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u)
	const [passwordRegex] = useState(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{3,15}/)

	async function handleSubmit(event) {
		event.preventDefault()

		internationalNameRegex.test(name) ? checkName() : toast.error('Nome inválido')
		passwordRegex.test(password) ? checkPasswordConfirm() : toast.error('A senha deve conter 3 digitos, 1 letra maiuscula, 1 letra minuscula e 1 caracte especial')

		try {
			await services.register({ name, email, password, password_confirmation: passwordConfirm })

			navigate("/")
			toast.success('Usuário cadastrado com sucesso!')
		} catch (error) {
			toast.error(error)
		}
	}

	function checkPasswordConfirm() {
		password !== passwordConfirm && toast.error('Senha não coincidem')
	}

	function checkName() {
		!(name.length >= 2 && name.length <= 20) && toast.error('Nome deve ter de 2 a 20 caracteres')
	}

	return (
		<Container>
			<Img src={Images['Logo']} width="147" />

			<Form width="85" onSubmit={handleSubmit}>
				<Input type="text" placeholder="Nome" value={name} setValue={setName} />
				<Input type="email" placeholder="E-mail" value={email} setValue={setEmail} />
				<Input type="password" placeholder="Senha" value={password} setValue={setPassword} />
				<Input type="password" placeholder="Confirme a senha" value={passwordConfirm} setValue={setPasswordConfirm} />

				<Button value="Entrar" width="100" type="submit" />
			</Form>

			<LinkToogle register={true} path="/" />
		</Container>
	)
}