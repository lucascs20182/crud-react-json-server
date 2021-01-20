import React from 'react'
import Main from '../template/Main'

const home = props =>
    <Main icon="home" title="Início"
        subtitle="Projeto de crud com react">
            <div className="display-4">Bem-vindo!</div>
            <hr />
            <p className="mb-0">Sistema para exemplificar a construção
                de um cadastro desenvolvido em React!</p>
    </ Main>

export default home
