import React from 'react'
import './styles.css'
import { FaFacebook, FaEnvelope, FaInstagram, FaWhatsapp } from 'react-icons/fa'

import Footer from '../../components/Footer'
import programador from '../../assets/programador.png'
import designer from '../../assets/designer.png'

const Contato = () => {
    return (
        <>
            <div className="imgFundo">
                <section className="secContato">
                    <section className="pessoas">
                        <header className="cabecalhoContatos">
                            <img src={programador} alt="Foto do desenvolvedor" className="imgContato" />

                            <div>
                                <h1 className="nomeContato">Ian da Conceição da Silva</h1>
                                <h2 className="setorContato">Programador</h2>
                            </div>
                        </header>

                        <ul className="redesSociaisContato">
                            <li>
                                <span><FaEnvelope size={30} /></span>

                                <a href="http://gmail.com" target="_blank" rel="noopener noreferrer">Gmail</a>
                            </li>

                            <li>
                                <span><FaFacebook size={30} /></span>

                                <a href="https://www.facebook.com/ian.conceicaodasilva"
                                    target="_blank" rel="noopener noreferrer">Facebook</a></li>

                            <li>
                                <span><FaInstagram size={30} /></span>

                                <a href="https://www.instagram.com/ian_1408"
                                    target="_blank" rel="noopener noreferrer">Instagram</a></li>

                            <li>
                                <span><FaWhatsapp size={30} /></span>

                                <a href="https://api.whatsapp.com/send?phone=5548998224086"
                                    target="_blank" rel="noopener noreferrer">Whatsapp</a></li>
                        </ul>
                    </section>

                    <section className="pessoas">
                        <header className="cabecalhoContatos">
                            <img src={designer} alt="Foto da designer" className="imgContato" />

                            <div>
                                <h1 className="nomeContato">Ana Clara Vargas Rodrigues</h1>
                                <h2 className="setorContato">Designer</h2>
                            </div>
                        </header>

                        <ul className="redesSociaisContato">
                            <li>
                                <span><FaEnvelope size={30} /></span>

                                <a href="http://gmail.com" target="_blank" rel="noopener noreferrer">Gmail</a>
                            </li>

                            <li>
                                <span><FaFacebook size={30} /></span>

                                <a href="https://pt-br.facebook.com/anaclara.vargasrodrigues"
                                    target="_blank" rel="noopener noreferrer">Facebook</a></li>

                            <li>
                                <span><FaInstagram size={30} /></span>

                                <a href="https://www.instagram.com/anaclaravargs"
                                    target="_blank" rel="noopener noreferrer">Instagram</a></li>

                            <li>
                                <span><FaWhatsapp size={30} /></span>

                                <a href="https://api.whatsapp.com/send?phone=5548998301146"
                                    target="_blank" rel="noopener noreferrer">Whatsapp</a></li>
                        </ul>
                    </section>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default Contato