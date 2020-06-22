import React from 'react'
import './styles.css'

import logo from '../../assets/logo.webp'

const Home = () => {
    return (
        <div>
            <div id="imgFundo">
                <div id="centralInfo">
                    <img id="logo" src={logo} alt="Brasão da Paróquia" />
                    <hr className="linha" />

                    <h1 id="titleSCJ">Santuário Sagrado Coração de Jesus</h1>

                    <hr className="linha" />
                    <h2 id="semiTitleSCJ">Gravatal - SC</h2>
                </div>
            </div>
            <div id="teste"><p>Apenas um Teste!</p></div>
        </div>
    )
}

export default Home