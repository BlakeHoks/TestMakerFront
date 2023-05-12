import '../../styles/TextQuestion.css'

export const TextQuestion = ({question}) => {
    return(
        <div className="question-div">
            <h3>{question.text}</h3>
            <input placeholder="Введите ответ"/>
        </div>
    );
}