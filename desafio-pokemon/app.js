new Vue ({
    el: '#app',
    data: {
        pokemonOpcoes: {},
        pokemonEscolhido: {
            pokemon:'Pikachu',
            img: './assets/pickachu.png', 
            ataques:
                {ataqueNormal: 'Cauda de ferro', ataqueEspecial: 'Choque do trovão' },
            },
        pokemonInimigo: {
            pokemon: 'Gengar',
            img:'./assets/gengar.png',
        },
        ataque: 'ataque',
        ataqueEspecial: 'ataque especial',
        vidaAtual: 100,
        estiloBarraVida: {
            width: '100%',
            backgroundColor: '#72BF78'
        },
        vidaAtualInimigo: 120,
        estiloBarraVidaInimigo: {
            width: '100%',
            backgroundColor: '#72BF78'
        },
        historico: [],
        numeroRodada: 0,
        fugir: true,
        resultadoPardida: '',
    },
    methods: {
        atualizarVida() {
        },
        rodada(movimento) {
            this.numeroRodada++
            if (movimento != 'cura'){
                const ataque = {
                    ataqueNormal: randomizaNumero(6,11),
                    ataqueEspecial: randomizaNumero(9, 16)
                }
                const danoAtaque = ataque[movimento]
                const dano = this.vidaAtualInimigo - danoAtaque > 0 ? danoAtaque : this.vidaAtualInimigo
                this.historico.unshift({
                    pokemon: this.pokemonEscolhido.pokemon,
                    ataque: this.pokemonEscolhido.ataques[movimento],
                    dano: dano,
                    backgroundColor: '#FFEB55',
                    rodada: this.numeroRodada
                })
                this.vidaAtualInimigo = this.vidaAtualInimigo - dano
                this.estiloBarraVidaInimigo.width = calculaPorcentagemVida(120, this.vidaAtualInimigo)
                if (this.vidaAtualInimigo == 0 ) {
                    this.resultadoPardida = 'venceu'
                }

            } else {
                const PocaoCura = randomizaNumero(13,18)
                const cura = this.vidaAtual + PocaoCura > 100 ? 100-this.vidaAtual : PocaoCura

                this.historico.unshift({
                    pokemon: this.pokemonEscolhido.pokemon,
                    cura: cura,
                    backgroundColor: '#72BF78',
                    rodada: this.numeroRodada
                })
                    if (this.vidaAtual < 100) {
                        this.vidaAtual = this.vidaAtual += cura
                    }
            }
            const danoAtaqueInimigo = randomizaNumero(8,15)
            const danoInimigo = this.vidaAtual - danoAtaqueInimigo > 0 ? danoAtaqueInimigo : this.vidaAtual
            this.historico.unshift({
                pokemon: this.pokemonInimigo.pokemon,
                ataque: 'Pulso das sombras',
                dano:danoInimigo,
                backgroundColor: '#7E60BF',
                rodada: this.numeroRodada
            })
            this.vidaAtual = this.vidaAtual - danoInimigo
            this.estiloBarraVida.width = calculaPorcentagemVida(100, this.vidaAtual)
            if (this.vidaAtual == 0 ) {
                return this.resultadoPardida = 'perdeu'
            }
        },
        reiniciar() {
            this.historico = []
            this.numeroRodada = 0
            this.vidaAtual = 100
            this.vidaAtualInimigo = 120
            this.estiloBarraVida.width = calculaPorcentagemVida(100, this.vidaAtual)
            this.estiloBarraVidaInimigo.width = calculaPorcentagemVida(120, this.vidaAtualInimigo)
            this.resultadoPardida = ''
        }
    },
    watch: {
        fugir() {
            this.reiniciar()
        },

    }
})

function randomizaNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function calculaPorcentagemVida(vidaInicial, vidaAtual) {
    const porcentagem = (vidaAtual / vidaInicial) * 100;
    return `${porcentagem.toFixed(0)}%`;
}
