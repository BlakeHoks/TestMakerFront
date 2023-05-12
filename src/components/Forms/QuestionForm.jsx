import styles from './QuestionForm.module.css'
import Select from "react-select";
import {useImmer} from "use-immer";

const clearQuestion = {type: '', text: '', answerText: ['', ''], answers: []}
const selectOptions = [
    {value: 'text', label: 'Вопрос с текстовым ответом'},
    {value: 'radio', label: 'Вопрос с выбором одного ответа'},
    {value: 'checkbox', label: 'Вопрос с множественным выбором ответа'},
]
const clearAnswerTexts = (value) => {
    switch (value) {
        case 'text':
            return ['']
        case 'radio':
            return ['', '']
        case 'checkbox':
            return ['', '', '']
        default:
            return
    }
}

export const QuestionForm = ({setQuestions}) => {
    const [question, setQuestion] = useImmer(clearQuestion)

    const createQuestion = (e) => {
        e.preventDefault()
        setQuestions(prev => [
            ...prev,
            {
                id: prev.length,
                ...question
            }
        ])
        setQuestion(draft => {
            draft.text = ''
            draft.answerText = clearAnswerTexts(draft.type)
        })
    }

    const addAnswerText = (e) => {
        e.preventDefault()
        setQuestion(draft => {
            draft.answerText.push('')
        })
    }

    const handleSelectChange = ({value}) => {
        setQuestion(draft => {
            draft.type = value
            draft.answerText = clearAnswerTexts(value)
        })
    }

    const handleTextChange = (e) => {
        setQuestion(draft => {
            draft.text = e.target.value
        })
    }

    const handleAnswerTextChange = (value, index) => {
        setQuestion(draft => {
            draft.answerText[index] = value
            draft.answers[index] = false
        })
    }

    const handleTrueAnswerChange = (index) => {
        setQuestion(draft => {
            draft.answers.fill(false)
            draft.answers[index] = true
        })
    }

    return(
        <form className={styles.form}>
            <input placeholder='Вопрос'
                onChange={handleTextChange}
                   value={question.text}/>
            <Select className={styles.select} options={selectOptions}
                    onChange={selectedOption => handleSelectChange(selectedOption)}/>
            {question.type === 'text' &&
                <input placeholder='Ответ'
                       onChange={e => setQuestion(prev =>({...prev, answerText: [e.target.value]}))}
                       value={question.answerText}/>
            }
            {question.type === 'radio' &&
                <div className={styles.cont}>
                    {question.answerText.map((v, i) =>
                        <label key={i}><input className='radio' onClick={() => handleTrueAnswerChange(i)} type="radio" name='que'/>
                            <input placeholder='Введите ответ'
                                   onChange={e => handleAnswerTextChange(e.target.value, i)}
                                   value={question.answerText[i]}/></label>)}
                    <button className='btn' onClick={addAnswerText}>+</button>
                </div>
            }
            {question.type === 'checkbox' &&
                <div className={styles.cont}>
                    {question.answerText.map((v, i) =>
                        <label key={i}><input className='radio' onClick={() => handleTrueAnswerChange(i)} type="checkbox" name='que'/>
                            <input placeholder='Введите ответ'
                                   onChange={e => handleAnswerTextChange(e.target.value, i)}
                                   value={question.answerText[i]}/></label>)}
                    <button className='btn' onClick={addAnswerText}>+</button>
                </div>
            }
            <button className='btn' onClick={createQuestion}>Добавить</button>
        </form>
    )
}