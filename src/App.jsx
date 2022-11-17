import { useContext } from "react";
import { ContextProvider } from "./context/contextProvider";
import AppContext from "./context/contextProvider";
import Cards from './components/Cards';
import Main from "./components/Main"



function App() {

    return (
        <ContextProvider>
            <div className="App">
                <Cards />
                <Main className="main">

                </Main>
            </div>
        </ContextProvider>
    )
}

export default App
