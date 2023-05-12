import styles from "./RadioQuestion.module.css";

export const CheckBoxQuestion = ({question}) => {
    return(
        <div className={styles.cont}>
            <h3>{question.text}</h3>
            <div className={styles.radioCont}>
                {question.answerText.map(v => <label key={question.answerText.indexOf(v)}><input type="checkbox" name='que'/>{v}</label>)}
            </div>
        </div>
    )
}
