import "./App.css";
/* import JatekTer from "./component/JatekTer"; */
import React, { useState } from "react";
import TicTacToeModel from "./model/TicTacToeModel.js";
import JatekTer from "./component/JatekTer.js";
import "./component/JatekTer.css";

const model = new TicTacToeModel();

function App() {
    const [lista, setLista] = useState(model.lista);
    const [kikovetkezik, setKikovetkezik] = useState(model.kikovetkezik);
    const [nyertes, setNyertes] = useState("");

    function kivalaszt(index) {
        model.kivalaszt(index);
        console.log(model.lista[index]);

        setLista(model.lista);
        setKikovetkezik(model.kikovetkezik);
        let nyer_szoveg=model.ellenerozes()
        if (nyer_szoveg!=="Döntetlen"){
            nyer_szoveg +=" nyert!"
        }
        setNyertes(nyer_szoveg)
    }
    return (
        <div className="App">
            <header className="App-header">Tic - Tac - Toe</header>
            <aside>
                <p>{kikovetkezik} következik!</p>
              
            </aside>
            <article>
                {
                     <JatekTer lista={lista} kivalaszt={kivalaszt}/> 
                }
            </article>
            <aside>
          
            <p>{nyertes} </p>
        </aside>
            <footer>Készítette: Cséfalvay Katalin</footer>
        </div>
    );
}

export default App;
