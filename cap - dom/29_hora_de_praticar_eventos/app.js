new Vue({
    el: '#desafio',
    data: {
        valor: '',
        mensagemAlerta: 'ALERTA!!!'
    },
    methods: {
        exibirAlerta: function() {
            alert(this.mensagemAlerta)
        },
        armazenaValor: function(event) {
            this.valor = event.target.value
            console.log(this.valor);
            
        }

    }
})