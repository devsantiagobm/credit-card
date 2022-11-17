import { createContext, useState } from "react";

const AppContext = createContext();
export function ContextProvider({children}){
    const [number, setNumber] = useState("");
    const [name, setName] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [cvc, setCvc] = useState("");
    const [sent, setSent] = useState(false);


    const contextData = {
        number,setNumber,
        name, setName,
        month, setMonth,
        year, setYear,
        sent, setSent,
        cvc, setCvc
    }

    return (
        <AppContext.Provider value={ contextData }>
            {children}
        </AppContext.Provider>
    )
}


export default AppContext