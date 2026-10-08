const setores = [];

export function cadastrar(setor) {
    setores.push(setor);
}

export function listar() {
    return setores;
}

export function buscarPorIndice(indice) {
    return setores[indice];
}

export function atualizar(indice, dadosAtualizados) {
    const setor = setores[indice];

    if (!setor) {
        return undefined;
    }

    Object.assign(setor, dadosAtualizados);

    return setor;
}

export function excluir(indice) {
    setores.splice(indice, 1);
}
