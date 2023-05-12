import './styles/App.css';
import {Route, Routes} from "react-router-dom";
import {Layout} from "./components/Layout";
import ErrorPage from "./components/ErrorPage";
import {Home} from "./components/Home";
import {Contacts} from "./components/Contacts";
import {CreateTest} from "./components/Forms/CreateTest";
import {RegistrationForm} from "./components/Forms/RegistrationForm";
import {AuthenticationForm} from "./components/Forms/AuthenticationForm";
import {TestsPage} from "./components/TestsPage";

function App() {
    return(
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path='makeTest' element={<CreateTest />}/>
                    <Route index element={<Home />}/>
                    <Route path='tests' element={<TestsPage />}/>
                    <Route path='contacts' element={<Contacts />}/>
                    <Route path='registration' element={<RegistrationForm />}/>
                    <Route path='auth' element={<AuthenticationForm />}/>
                    <Route path='*' element={<ErrorPage />}/>
                </Route>
            </Routes>
        </div>
  )
}

export default App;
