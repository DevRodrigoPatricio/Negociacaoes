import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    private negociacaoes:Negociacao [];
    adiciona(negociacao :Negociacao){
        this.negociacaoes.push(negociacao);
    }

    lista():readonly Negociacao[]{
        return this.negociacaoes;
    }
}

const negociacoes = new Negociacoes();
