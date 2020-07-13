import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './styles.css'
import logo from '../../assets/logo.webp'
import Footer from '../../components/Footer'
import api from '../../services/api'

function rolarScroll() {
    const meiaTelaY = window.innerHeight
    console.log(meiaTelaY)

    window.scrollTo(0, window.innerHeight)
}

interface Missa {
    id: number
    local_id: number
    data: string
    hora: string
    max_pessoas: number
    pessoas_cadastradas: number
}

const Home = () => {
    const [missas, setMissas] = useState<Missa[]>([])

    useEffect(() => {
        api.get('missas').then(response => {
            setMissas(response.data)
        })
    }, [])

    function voltarTopo() {
        window.scrollTo(0, 0)
    }

    return (
        <>
            <div className="imgFundo">
                <section className="secHome">
                    <div className="centralInfo" onClick={rolarScroll}>
                        <img className="logo" src={logo} alt="Brasão da Paróquia" />
                        <hr className="linha" />

                        <h1 className="tituloSCJ">Santuário Sagrado Coração de Jesus</h1>

                        <hr className="linha" />
                        <h2 className="subTituloSCJ">Gravatal - SC</h2>
                    </div>
                </section>

                <section className="sectionBotoes">
                    <div className="alinhaCentro">
                        <Link to="/cadastrar-missa" className="btnCadastrar" onClick={voltarTopo}>Cadastrar Missa</Link>
                        <Link to="/editar-missa" className="btnEditar" onClick={voltarTopo}>Editar Missa</Link>
                    </div>
                </section>

                <section className="cronograma">
                    <h1 className="proximasMissas">PRÓXIMAS MISSAS</h1>

                    <div className="gridMissas">
                        {missas.map(missa => {
                            const diaMissa = new Date(Date.parse(`${missa.data}`))

                            const diasSemana = ['DOMINGO', 'SEGUNDA-FEIRA', 'TERÇA-FEIRA', 'QUARTA-FEIRA',
                                'QUINTA-FEIRA', 'SEXTA-FEIRA', 'SÁBADO']

                            return (
                                <div key={missa.id} className="detalhesMissa">
                                    <h1 className="tituloMissa">{missa.data.slice(5, 10)} - {missa.hora}</h1>

                                    <h2 className="subTituloMissa">{diasSemana[diaMissa.getDay()]} | {
                                        missa.local_id === 1 ? 'CENTRO' : 'TERMAS'
                                    } </h2>

                                </div>
                            )
                        })}
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default Home