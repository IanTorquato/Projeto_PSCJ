import Knex from 'knex'

export async function seed(Knex: Knex) {
    await Knex('locais').insert([
        { nome: 'Centro', imagem: 'igrejaCentro.png' },
        { nome: 'Termas', imagem: 'igrejaTermas.png' }
    ])

    await Knex('missas').insert([
        { id: 1, local_id: 1, data: "2020/08/01", hora: "13:00", max_pessoas: 100, pessoas_cadastradas: 50 },
        { id: 2, local_id: 2, data: "2020/08/02", hora: "14:00", max_pessoas: 200, pessoas_cadastradas: 100 },
        { id: 3, local_id: 1, data: "2020/08/03", hora: "15:00", max_pessoas: 300, pessoas_cadastradas: 150 },
        { id: 4, local_id: 2, data: "2020/08/04", hora: "16:00", max_pessoas: 400, pessoas_cadastradas: 200 },
        { id: 5, local_id: 1, data: "2020/08/05", hora: "17:00", max_pessoas: 500, pessoas_cadastradas: 250 },
        { id: 6, local_id: 2, data: "2020/08/06", hora: "18:00", max_pessoas: 600, pessoas_cadastradas: 300 }
    ])

    await Knex('usuarios').insert([
        { id: 1, nome: "Ian Torquato", foto: '', email: "iantorquato3@gmail.com" }
    ])

    await Knex('missa_usuario').insert([
        { id: 1, missa_id: 1, usuario_id: 1, quantidade_pessoas: 50 },
        { id: 2, missa_id: 2, usuario_id: 1, quantidade_pessoas: 100 },
        { id: 3, missa_id: 3, usuario_id: 1, quantidade_pessoas: 150 },
        { id: 4, missa_id: 4, usuario_id: 1, quantidade_pessoas: 200 },
        { id: 5, missa_id: 5, usuario_id: 1, quantidade_pessoas: 250 },
        { id: 6, missa_id: 6, usuario_id: 1, quantidade_pessoas: 300 }
    ])
}