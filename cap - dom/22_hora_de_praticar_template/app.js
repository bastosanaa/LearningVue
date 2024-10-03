new Vue ({
    el: '#desafio',
    data: {
        nome:'Ana',
        idade: '20',
        hrefGatinho:'https://www.zooplus.pt/magazine/wp-content/uploads/2021/03/kitten-sitzt-boden-768x512-1.jpeg'
    },
    methods: {
        numeroAleatorio: function() {
            return Math.random()
        }
    }
})