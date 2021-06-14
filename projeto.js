console.log('--------------------------------------')
console.log('     Projeto Carrinho de Compras      ')
console.log('           Lari Souza                 ')
console.log('--------------------------------------')


const produtos = require('./database')
const read = require('readline-sync')
const carrinho = []

produtos.sort((a, b) => a.preco - b.preco)

let array = new Array();

const verCategoria = read.question('Deseja encontrar o produto por categoria? (S/N)')
if (verCategoria.toUpperCase() === 'S') {
    console.log('-----------------------------------------------')
    console.log('      As categorias de produtos sao:     ')

    console.log(' alimento, bebida, casa, higiene, informática  ')
    console.log('-----------------------------------------------')

    const verCategoria = read.question('Qual categoria voce deseja? ');

    const findCategoria = produtos.filter(produtos => produtos.categoria === verCategoria);

    console.table(findCategoria)

} else {
    console.log('Estes sao os nossos produtos: ')
    console.table(produtos)
}

const array1 = new Array()

class pedidosAdd {
    constructor(array) {
        this.product = array
        this.subTotal = 0
        this.valorTotal = 0
        this.totalItems = 0
    }
}

const realizarCompra = read.question('Deseja efetuar uma compra? (S/N)')

if (realizarCompra.toUpperCase() === 'S') {

    const fazerCompras = () => {

        produtoID = parseInt(read.question('Digite o id do produto desejado: '))


        for (i = 0; i < 1000; i++) {
            buscarId = produtos.find(item => item.id === produtoID)
            if (buscarId) {
                break;
            } else {
                produtoID = parseInt(read.question('Id nao encontrado, tente novamente: '))
            }
        }

        quantidadeItens = parseInt(read.question('Digite a quantidade desejada de produtos: '))

        for (i = 0; i < 1000; i++) {
            if (quantidadeItens > 0) {
                break;
            } else {
                quantidadeItens = parseInt(read.question('Digite uma quantidade valida: '))
            }
        }

        const produtosCarrinho = {
            ...buscarId,
            quantidade: quantidadeItens
        }
        carrinho.push(produtosCarrinho)

        const contComprando = read.question('Deseja inserir mais algum produto no carrinho? (Digite S ou N): ')
        const contComprandoFormat = contComprando.toLowerCase()

        if (contComprandoFormat === 'n') {
            cupomDesc = read.question('Voce possui cupom de desconto: (S/N)').toLowerCase(); {
                if (cupomDesc === 's') {
                    cupom = parseInt(read.question('Digite o valor do seu cupom de desconto: '))
                    for (i = 0; i < 1000; i++) {
                        if (cupom !== 15) {
                            cupom = parseInt(read.question('Cupom invalido! Tente novamente: '))
                        } else {
                            break;
                        }
                    }
                }
            }
        } else {
            fazerCompras()
        }
    }
    fazerCompras()

    class Order {
        constructor(carrinho) {
            this.newProducts = carrinho
            this.subtotal = 0
        }
        calcSubtotal() {
            this.subtotal = this.newProducts.reduce((acumulador, item) => acumulador + (item.preco * item.quantidade), 0)
        }
    }
    const order = new Order(carrinho)
    console.table(order.newProducts)


    order.calcSubtotal()
    console.log(`O valor do pedido: R$ ${order.subtotal.toFixed(2)}.`)


    const desconto = order.subtotal * (cupom / 100)
    console.log(`O valor do desconto: R$ ${desconto.toFixed(2)}.`)


    const total = order.subtotal - desconto
    console.log(`O valor total do seu pedido é R$ ${total.toFixed(2)}`)

    const hoje = new Date()

    const dia = hoje.getDate()
    const mes = hoje.getMonth()
    const ano = hoje.getFullYear()

    const dataFormatada = hoje.toLocaleDateString('pt-BR')

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }

    const dataLonga = hoje.toLocaleDateString('pt-BR', options)
console.log('------------------------------------')
    console.log('Obrigada por comprar conosco!')
    console.log(dataLonga)
} else {
}
console.log('------------------------------------')