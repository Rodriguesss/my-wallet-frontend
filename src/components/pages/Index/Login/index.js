import { Images } from '../../../../utils/images/images_import'

import { Container, Img } from "../style"
import Input from '../../../atomics/Input'
import Form from '../../../generics/Form'

import { useState } from 'react'
import Button from '../../../atomics/Button'
import LinkToogle from '../../../atomics/LinkToogle'

export default function Login() {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	return (

		<Container>
			<Img src={Images['Logo']} width="147" />

			<Form width="85">
				<Input type="email" placeholder="E-mail" value={email} setValue={setEmail} />
				<Input type="password" placeholder="Senha" value={password} setValue={setPassword} />

				<Button value="Entrar" width="100" type="submit" />
			</Form>

			<LinkToogle register={false} path="/register" />

		</Container>
	)
}