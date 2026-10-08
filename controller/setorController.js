import { Setor } from "../model/Setor.js";

import {
    cadastrar,
    listar,
    buscarPorIndice,
    atualizar,
    excluir
} from "../repository/setorRepository.js";

export function cadastrarSetor(req, res) {
    const { nome, sigla, responsavel, ramal } = req.body;

    const setor = new Setor(nome, sigla, responsavel, ramal);

    cadastrar(setor);

    res.status(201).json(setor);
}

export function listarSetores(req, res) {
    const setores = listar();

    res.status(200).json(setores);
}

export function buscarSetor(req, res) {
    const { indice } = req.params;

    const setor = buscarPorIndice(indice);

    if (!setor) {
        return res.status(404).json({
            mensagem: "Setor não encontrado!"
        });
    }

    res.status(200).json(setor);
}

export function atualizarSetor(req, res) {
    const { indice } = req.params;

    const setor = buscarPorIndice(indice);

    if (!setor) {
        return res.status(404).json({
            mensagem: "Setor não encontrado!"
        });
    }

    const setorAtualizado = atualizar(indice, req.body);

    res.status(200).json(setorAtualizado);
}

export function excluirSetor(req, res) {
    const { indice } = req.params;

    const setor = buscarPorIndice(indice);

    if (!setor) {
        return res.status(404).json({
            mensagem: "Setor não encontrado!"
        });
    }

    excluir(indice);

    res.status(200).json({
        mensagem: "Setor excluído com sucesso!"
    });
}
