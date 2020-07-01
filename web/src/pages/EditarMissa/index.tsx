import React from 'react'
import './styles.css'

import Footer from '../../components/Footer'

const EditarMissa = () => {
    return (
        <>
            <div className="imgFundo">
                <section className="selecionarMissa">
                    <h1 className="principal">Selecione uma Missa</h1>

                    <div className="gridSelecionar">
                        <div className="detalhesSelectMissa">
                            <h1 className="tituloSelectMissa">23/06 - 19:30</h1>

                            <h2 className="subTituloSelectMissa">EU NÃO SEI EXATAMENTO O QUE TESTAR AQUI MAS EU SOU</h2>
                        </div>

                        <div className="detalhesSelectMissa">
                            <h1 className="tituloSelectMissa">26/06 - 19:30</h1>

                            <h2 className="subTituloSelectMissa">SEXTA-FEIRA | SANTUÁRIO SCJ - CENTRO</h2>
                        </div>

                        <div className="detalhesSelectMissa">
                            <h1 className="tituloSelectMissa">27/06 - 19:30</h1>

                            <h2 className="subTituloSelectMissa">SÁBADO | SANTUÁRIO SCJ - CENTRO</h2>
                        </div>

                        <div className="detalhesSelectMissa">
                            <h1 className="tituloSelectMissa">28/06 - 19:00</h1>

                            <h2 className="subTituloSelectMissa">DOMINGO | SANTUÁRIO SCJ - CENTRO</h2>
                        </div>

                        <div className="detalhesSelectMissa">
                            <h1 className="tituloSelectMissa">28/06 - 19:00</h1>

                            <h2 className="subTituloSelectMissa">DOMINGO | SANTUÁRIO SCJ - CENTRO</h2>
                        </div>

                        <div className="detalhesSelectMissa">
                            <h1 className="tituloSelectMissa">28/06 - 19:00</h1>

                            <h2 className="subTituloSelectMissa">DOMINGO | SANTUÁRIO SCJ - CENTRO</h2>
                        </div>
                    </div>
                </section>

                <section className="secEditar">
                    <form>
                        <h1>EDITAR MISSA</h1>
                        <hr />

                        <fieldset>
                            <legend>
                                <h2>Local</h2>
                            </legend>

                            <div className="field">
                                <select name="local" id="local">
                                    <option value="0">Selecione um Local</option>
                                </select>
                            </div>
                        </fieldset>

                        <fieldset>
                            <legend>
                                <h2>Data e Horário</h2>
                            </legend>

                            <div className="field">
                                <input type="datetime-local" name="dataHora" id="dataHora" />
                            </div>
                        </fieldset>

                        <button type="submit">Editar Missa</button>
                    </form>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default EditarMissa