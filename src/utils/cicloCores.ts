import { cores } from '../styles'

const { vermelhoClaro, amareloClaro, azulClaro } = cores.principais

const retornaCorDoCicloTernario = (index: number, propriedadeCor: string) => {
	// Lógica da função desenvolvida com base no conceito de Números Imaginários

	if (index === 0 || index % 3 === 0) { return { [propriedadeCor]: vermelhoClaro } }
	else if (index === 1 || index % 3 === 1) { return { [propriedadeCor]: amareloClaro } }
	else if (index === 2 || index % 3 === 2) { return { [propriedadeCor]: azulClaro } }
}

export default retornaCorDoCicloTernario
