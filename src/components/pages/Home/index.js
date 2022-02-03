import Title from "../../atomics/Title";
import Icon from "../../atomics/Icon";
import { AddCircleOutline, RemoveCircleOutline } from 'react-ionicons'

import { ContainerOperationBox, DataContainer, HomeHeader, HomeStyle, OperationBox } from "./style";
import { Images } from '../../../utils/images/images_import'

export default function Home() {
	return (
		<HomeStyle>
			<HomeHeader>
				<Title>Olá, Fulano</Title>
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
					/>
					<p>Nova entrada</p>
				</OperationBox>

				<OperationBox>
					<RemoveCircleOutline
						color={'#FFF'}
						height="25px"
						width="25px"
					/>
					<p>Nova saída</p>
				</OperationBox>
			</ContainerOperationBox>


		</HomeStyle>
	)
}