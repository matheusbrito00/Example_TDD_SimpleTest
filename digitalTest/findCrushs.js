const listaDeCrush = [
    "Polyanna",
    "Carlos Daniel",
    "Julia",
    "Bruna"
]

const somaCrush = (n1, n2) => n1 + n2;

const encontraCrush = nome => {
    try{
        validacao(nome)
        const crushEncontrado = listaDeCrush.find(crush => crush === nome)
        return crushEncontrado ? crushEncontrado : 'Crush não Encontrado'
    }catch(erro){
        return erro
    }
}

const validacao = nome => {
    if(!nome) throw 'Campo nome esta vazio'
    if(typeof nome !== 'string') throw 'Tipo invalido'
}

module.exports = {
    somaCrush,
    encontraCrush
}