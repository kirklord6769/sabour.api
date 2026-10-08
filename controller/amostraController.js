import { Amostra } from "../model/Amostra.js";

import {
    cadastrar,
    listar,
    buscarPorIndice,
    excluir
} from "../repository/amostraRepository.js";

export function cadastrarAmostra(req, res) {
    const amostra = new Amostra(req.body);

    cadastrar(amostra);

    res.status(201).json(amostra);
}

export function listarAmostra(req, res) {
    const amostras = listar();

    res.status(200).json(amostras);
}

export function buscarAmostra(req, res) {
    const { indice } = req.params;

    const amostra = buscarPorIndice(indice);

    if (!amostra) {
        return res.status(404).json({
            mensagem: "Amostra não encontrada!"
        });
    }

    res.status(200).json(amostra);
}

export function excluirAmostra(req, res) {
    const { indice } = req.params;

    const amostra = buscarPorIndice(indice);

    if (!amostra) {
        return res.status(404).json({
            mensagem: "Amostra não encontrada!"
        });
    }

    excluir(indice);

    res.status(204).send();
}
