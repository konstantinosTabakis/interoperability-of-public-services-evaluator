import Input from './Input'

function InputList({ questions }) {
    return (
        <>
            {questions.map((el) => (
                <Input key={el.id} item={el} />
            ))}
        </>
    )
}

export default InputList