import React from 'react'
import './styles.css'

import logoInstagram from '../../assets/logoInstagram.webp'
import logoFacebook from '../../assets/logoFacebook.webp'
import logoYoutube from '../../assets/logoYoutube.webp'

const Footer = () => {
    const dataAtual = new Date()
    const anoAtual = dataAtual.getFullYear()

    return (
        <footer className="cabecalho">
            <nav>
                <ul>
                    <li>
                        <a href="https://www.facebook.com/Paróquia-Santuário-Sagrado-Coração-de-Jesus-108271214142847"
                            className="facebook" target="_blank" rel="noopener noreferrer">
                            <img src={logoFacebook} className="icons" alt="Icone do Facebook" />
                        </a>
                    </li>

                    <li>
                        <a href="https://www.instagram.com/santuariogravatal" className="instagram" target="_blank"
                            rel="noopener noreferrer">
                            <img src={logoInstagram} className="icons" alt="Icone do Instagram" />
                        </a>
                    </li>

                    <li>
                        <a href="https://www.youtube.com/channel/UCoWwECJDCgyMggNyKJ14jnA" className="youtube"
                            target="_blank" rel="noopener noreferrer">
                            <img src={logoYoutube} className="icons" alt="Icone do YouTube" />
                        </a>
                    </li>
                </ul>
            </nav>

            <p className="copyright">&copy; 2020 - {anoAtual} por Ian da Conceição da Silva e
            Ana Clara Vargas Rodrigues</p>
            <p className="contato">Contato: iantorquato2@gmail.com | anaclaravargas16@gmail.com</p>
        </footer>
    )
}

export default Footer