import {TestCard} from "./TestCard";
import '../styles/QuestionBlock.css'
import {useQuery} from "@tanstack/react-query";
import {TestService} from "../services/test.service";

export const TestsPage = () => {
    //const [tests, setTests] = useState([])

    const {tests, isLoading} = useQuery(['users'], () => TestService.getAll())

    if(isLoading) return <p>Loading...</p>

    return(
        <div>
            <input placeholder='Поиск'/>
            <div className='question-container'>
                <h2>Список тестов</h2>
                {tests.length ? tests.map((test, index) => <TestCard key={index} test={test}/>)
                    :< p>There are no tests</p>
                }
            </div>
<       /div>
    )
}