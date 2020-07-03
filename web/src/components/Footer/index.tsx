import React from 'react'
import './styles.css'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    const dataAtual = new Date()
    const anoAtual = dataAtual.getFullYear()

    return (
        <footer className="rodape">
            <nav>
                <ul>
                    <li>
                        <a href="https://www.facebook.com/Paróquia-Santuário-Sagrado-Coração-de-Jesus-108271214142847"
                            className="facebook" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF size={40} />
                        </a>
                    </li>

                    <li>
                        <a href="https://www.instagram.com/santuariogravatal" className="instagram" target="_blank"
                            rel="noopener noreferrer">
                            <FaInstagram size={40} />
                        </a>
                    </li>

                    <li>
                        <a href="https://www.youtube.com/channel/UCoWwECJDCgyMggNyKJ14jnA" className="youtube"
                            target="_blank" rel="noopener noreferrer">
                            <FaYoutube size={40} />
                        </a>
                    </li>
                </ul>
            </nav>

            <p className="copyright">&copy; 2020 - {anoAtual} por Ian da Conceição da Silva e Ana Clara Vargas Rodrigues</p>
            <a href="/contato" className="contatos">Contate os Desenvolvedores</a>
        </footer>
    )
}

export default Footer