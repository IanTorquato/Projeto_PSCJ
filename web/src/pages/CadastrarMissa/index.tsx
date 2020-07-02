import React from 'react'
import './styles.css'

import Footer from '../../components/Footer'

const CadastrarMissa = () => {
    return (
        <>
            <div className="imgFundo">
                <section className="secCadastrar">
                    <form>
                        <h1>CADASTRAR MISSA</h1>
                        <hr />

                        <fieldset className="fieldsetCadastrar">
                            <legend>
                                <h2>Local</h2>
                            </legend>

                            <div className="field">
                                <select name="local" id="local">
                                    <option value="0">Selecione um Local</option>
                                </select>
                            </div>
                        </fieldset>

                        <fieldset className="fieldsetCadastrar">
                            <legend>
                                <h2>Data e Horário</h2>
                            </legend>

                            <div className="field">
                                <input type="datetime-local" name="dataHora" id="dataHora" />
                            </div>
                        </fieldset>

                        <button type="submit" className="cadastrarMissa">Cadastrar Missa</button>
                    </form>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default CadastrarMissa