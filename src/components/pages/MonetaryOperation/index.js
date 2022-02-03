import { useState } from "react"
import Button from "../../atomics/Button"
import Input from "../../atomics/Input"
import Title from "../../atomics/Title"
import Form from "../../generics/Form"
import { MonetaryOperationStyle, MonetaryOperationHeader } from "./style"

export default function MonetaryOperation({ deposit }) {
    const [money, setMoney] = useState("")
    const [description, setDescription] = useState("")
    const [operation] = useState(deposit ? "entrada" : "saída")

    return (
        <MonetaryOperationStyle>
            <MonetaryOperationHeader>
                <Title>{`Nova ${operation}`}</Title>
            </MonetaryOperationHeader>

            <Form width="90">
                <Input placeholder="Valor" type="number" value={money} setValue={setMoney} />
                <Input placeholder="Descrição" type="text" value={description} setValue={setDescription} />

                <Button value={`Salvar ${operation}`} type="submit" width="100" />
            </Form>
        </MonetaryOperationStyle>
    )
}