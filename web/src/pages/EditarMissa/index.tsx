import React from 'react'
import './styles.css'

import Footer from '../../components/Footer'

const EditarMissa = () => {
    return (
        <>
            <div className="imgFundo">
                <section className="secEditar">
                    <form>
                        <h1>EDITAR MISSA</h1>
                        <hr />

                        <fieldset className="fieldsetEditar">
                            <legend>
                                <h2>Missas Cadastradas</h2>
                            </legend>

                            <div className="field">
                                <select name="missa" className="missa">
                                    <option value="0">Selecione uma Missa</option>
                                </select>
                            </div>
                        </fieldset>

                        <fieldset className="fieldsetEditar">
                            <legend>
                                <h2>Local e Quantidade Máxima de Pessoas</h2>
                            </legend>

                            <div className="field">
                                <select name="local" className="local">
                                    <option value="0">Selecione um Local</option>
                                </select>

                                <input type="number" name="maxPessoas" className="maxPessoas" defaultValue={0} />
                            </div>
                        </fieldset>

                        <fieldset className="fieldsetEditar">
                            <legend>
                                <h2>Data e Horário</h2>
                            </legend>

                            <div className="field">
                                <input type="datetime-local" name="dataHora" className="dataHora" />
                            </div>
                        </fieldset>

                        <button type="submit" className="editarMissa">Editar Missa</button>
                    </form>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default EditarMissa