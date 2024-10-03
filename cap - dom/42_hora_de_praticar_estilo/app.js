new Vue({
	el: '#desafio',
	data: {
		classe1: 'destaque',
		bordinha: true,
		classe3: '',
		classe4: '',
		estilo: {
			width: '100px',
			height: '100px',
		},
		cor5: '',
		progresso: '0',
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classe1 = this.classe1 == 'encolher'
				? 'destaque' : 'encolher'
			},1000)
		},
		iniciarProgresso() {
			let valor = 0
			const temporizador = setInterval(() => {
				valor += 5 
				this.progresso = `${valor}%`
				if (valor==100) clearInterval(temporizador)
			},500)

		},
		setBordinha(event) {
			if (event.target.value == "true") {
				this.bordinha = true
			} else if (event.target.value == "false") {
				this.bordinha = false
			}
		},
	}
})
