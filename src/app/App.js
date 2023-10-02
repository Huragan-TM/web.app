import React from "react";
import useLang from "../hooks/useLang";

function App(){
    const lang = useLang()

    return(
        <div className="App">
            {lang["app.welcome"]}
        </div>
    )
}

export default App
