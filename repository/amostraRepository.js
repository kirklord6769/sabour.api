const Amostras = [];

export function cadastrar(amostra){
    Amostras.push(amostra)
}
export function listar(){
    return Amostras;
}
export function buscarPorIndice(indice){
    return Amostras[indice]
}
export function excluir(indice){
    Amostras.splice(indice, 1)
}