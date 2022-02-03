import { Images } from '../../../../utils/images/images_import'

import { Container, Img } from "../style"
import Input from '../../../atomics/Input'
import Form from '../../../generics/Form'

import { useState } from 'react'
import Button from '../../../atomics/Button'
import LinkToogle from '../../../atomics/LinkToogle'

export default function Register() {
    const [nome, setNome] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")

	return (
		<Container>
			<Img src={Images['Logo']} width="147" />

			<Form width="85">
                <Input type="text" placeholder="Nome" value={nome} setValue={setNome} />
				<Input type="email" placeholder="E-mail" value={email} setValue={setEmail} />
				<Input type="password" placeholder="Senha" value={password} setValue={setPassword} />
                <Input type="password" placeholder="Confirme a senha" value={passwordConfirm} setValue={setPasswordConfirm} />

				<Button value="Entrar" width="100" type="submit" />
			</Form>

			<LinkToogle register={true} path="/login" />
		</Container>
	)
}