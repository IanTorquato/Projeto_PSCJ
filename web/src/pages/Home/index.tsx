import React from 'react'
import './styles.css'

import logo from '../../assets/logo.webp'

const Home = () => {
    return (
        <div className="imgFundo">
            <div className="telaInicial">
                <div className="centralInfo">
                    <img className="logo" src={logo} alt="Brasão da Paróquia" />
                    <hr className="linha" />

                    <h1 className="tituloSCJ">Santuário Sagrado Coração de Jesus</h1>

                    <hr className="linha" />
                    <h2 className="subTituloSCJ">Gravatal - SC</h2>
                </div>
            </div>

            <div className="divBotao">
                <div className="btnCadastrar">Cadastrar Missa</div>
            </div>

            <div className="cronograma">
                <h1 className="proximasMissas">PRÓXIMAS MISSAS</h1>

                <div className="doisItems">
                    <div className="detalhesMissa">
                        <h1 className="tituloMissa">23/06 - 19:30</h1>

                        <h2 className="subTituloMissa">SEGUNDA-FEIRA | CAPELA SANTO ANTÔNIO - TERMAS</h2>
                    </div>

                    <div className="detalhesMissa">
                        <h1 className="tituloMissa">26/06 - 19:30</h1>

                        <h2 className="subTituloMissa">SEXTA-FEIRA | SANTUÁRIO SCJ - CENTRO</h2>
                    </div>
                </div>

                <div className="doisItems">
                    <div className="detalhesMissa">
                        <h1 className="tituloMissa">27/06 - 19:30</h1>

                        <h2 className="subTituloMissa">SÁBADO | SANTUÁRIO SCJ - CENTRO</h2>
                    </div>

                    <div className="detalhesMissa">
                        <h1 className="tituloMissa">28/06 - 19:00</h1>

                        <h2 className="subTituloMissa">DOMINGO | SANTUÁRIO SCJ - CENTRO</h2>
                    </div>
                </div>
            </div>

            <footer className="cabecalho">
            </footer>
        </div>
    )
}

export default Home