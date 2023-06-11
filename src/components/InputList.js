import Input from './Input'

function InputList({ questions, currentPage }) {
    return (
        <>
            {questions.map((el,index) => (
                <Input key={index} item={el} currentPage={currentPage} index={index} />
            ))}
        </>
    )
}

export default InputList