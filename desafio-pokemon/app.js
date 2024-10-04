new Vue ({
    el: '#app',
    data: {
        pokemonEscolhido: {
            pokemon:'Pikachu',
            img: 'https://i.pinimg.com/736x/bf/95/34/bf953419d76bf747cba69b55e6e03957.jpg', 
            ataques:
                {ataqueNormal: 'Cauda de ferro', ataqueEspecial: 'Choque do trovão' },
            },
        pokemonInimigo: {
            pokemon: 'Gengar',
            img:'https://i.pinimg.com/originals/ae/f4/80/aef4805c7c2afc9bae51613e46bd5b50.png',
        },
        ataque: 'ataque',
        ataqueEspecial: 'ataque especial',
        vidaAtual: 100,
        estiloBarraVida: {
            width: '100%',
            backgroundColor: '#72BF78'
        },
        vidaAtualInimigo: 100,
        estiloBarraVidaInimigo: {
            width: '100%',
            backgroundColor: '#72BF78'
        },
        historico: []
    },
    methods: {
        atualizarVida() {
        },
        rodada(movimento) {
            if (movimento != 'cura'){
                const ataque = {
                    ataqueNormal: randomizaNumero(6,11),
                    ataqueEspecial: randomizaNumero(9, 16)
                }
                const dano = ataque[movimento]
                this.historico.push({
                    pokemon: this.pokemonEscolhido.pokemon,
                    ataque: this.pokemonEscolhido.ataques[movimento],
                    dano: dano,
                    backgroundColor: '#FFEB55'
                })
                
                this.vidaAtualInimigo = this.vidaAtualInimigo - dano
                this.estiloBarraVidaInimigo.width = calculaPorcentagemVida(100, this.vidaAtualInimigo)

            } else {
                this.historico.push({
                    pokemon: this.pokemonEscolhido.pokemon,
                    cura: randomizaNumero(7,16)})
            }
            const danoInimigo = randomizaNumero(8,15)
            this.historico.push({
                pokemon: this.pokemonInimigo.pokemon,
                ataque: 'Pulso das sombras',
                dano:danoInimigo,
                backgroundColor: '#7E60BF'
            })

            this.vidaAtual = this.vidaAtual - danoInimigo
                this.estiloBarraVida.width = calculaPorcentagemVida(100, this.vidaAtual)
            
        },
        
    },
})

function randomizaNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function calculaPorcentagemVida(vidaInicial, vidaAtual) {
    const porcentagem = (vidaAtual / vidaInicial) * 100;
    return `${porcentagem.toFixed(0)}%`;
}