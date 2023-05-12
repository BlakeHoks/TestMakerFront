import '../styles/QuestionBlock.css'
import {TextQuestion} from "./Questions/TextQuestion";
import {QuestionForm} from "./Forms/QuestionForm";
import {useState} from "react";
import {questions as questionsData} from "./questions.data";
import {RadioQuestion} from "./Questions/RadioQuestion";
import {CheckBoxQuestion} from "./Questions/CheckBoxQuestion";

function QuestionBlock(){
    const [questions, setQuestions] = useState(questionsData)
    const pickQuest = (question) => {
        switch (question.type) {
            case 'text':
                return <TextQuestion key={question.id} question={question}/>
            case 'radio':
                return <RadioQuestion key={question.id} question={question}/>
            case 'checkbox':
                return <CheckBoxQuestion key={question.id} question={question}/>
            default:
                return
        }
    }
    console.log(questions)
    return(
        <div className="question-container">
            <QuestionForm setQuestions={setQuestions}/>
            {
                questions.map(question => pickQuest(question))
            }
            <div>
                <button className='btn'>Сохранить</button>
            </div>
        </div>
    )
}
export default QuestionBlock