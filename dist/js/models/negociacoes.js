export class Negociacoes {
    adiciona(negociacao) {
        this.negociacaoes.push(negociacao);
    }
    lista() {
        return this.negociacaoes;
    }
}
const negociacoes = new Negociacoes();
