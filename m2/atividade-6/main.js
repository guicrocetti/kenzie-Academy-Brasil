class Carrinho {
    constructor(valorTotal, qtdProdutos, valorFrete){
        this._valorTotal = valorTotal;
        this._qtdProdutos = qtdProdutos;
        this._valorFrete = valorFrete;
        this.itensCarrinho = [
            {nome: "Caderno" , preco: 10, disponivel: true },
            {nome: "Estojo", preco: 30 , disponivel: false },
            {nome: "Mochila", preco: 70 , disponivel: true },
            {nome: "Lapiseira", preco: 5 , disponivel: true },
            {nome: "Fichario", preco: 50 , disponivel: true },
            {nome: "Borracha", preco: 3 , disponivel: false },
            {nome: "Lancheira", preco: 20 , disponivel: true },
        ]  
    }
    calculaPrecoPromocional(){
        const total = this.itensCarrinho.reduce((acc, {preco}, index) => {
            if(this.itensCarrinho[index].disponivel === true)
            acc+= preco;
            return acc
        },0)  
        if(total >= 150)
        this._valorFrete = 0
    }
    verificarDisponibilidade(){
        return this.itensCarrinho.filter(ele => ele.disponivel === false)
    }
}

class Estoque {
    constructor(quantidadeMinimaEstoque, quantidadeMaximaEstoque){
        this._quantidadeMinimaEstoque = quantidadeMinimaEstoque;
        this._quantidadeMaximaEstoque = quantidadeMaximaEstoque;
        this.itensEstoque = {
            eletronicos:[
                {id:1,nome: "Tv" , preco:1200, estoque:80},
                {id:2,nome: "Computadores",  preco:3000, estoque:100},
                {id:3,nome: "Celulares",  preco:800, estoque:54},
                {id:4,nome: "Fones",preco:5,  estoque:41},
                {id:5,nome: "Webcam", preco:50, estoque:36},
                {id:6,nome: "Mouse", preco:3,  estoque:354},
                {id:7,nome: "Tablet",preco:20, estoque:150},
                {id:8,nome: "Mousepads",   preco:2, estoque:1000},
                {id:9,nome: "Headsets",preco:35, estoque:80},
                {id:10,nome: "Impressoras", preco:1, estoque:50},
                {id:12,nome: "No-breaks", preco:14, estoque:36},
                {id:13,nome: "Memória ram", preco:3, estoque:12},
            ],
            materialEscolar:[
                {id:1,nome: "Caderno" , preco:10, estoque:80},
                {id:2,nome: "Estojo",   preco:30, estoque:100},
                {id:3,nome: "Mochila",  preco:70, estoque:54},
                {id:4,nome: "Lapiseira",preco:5,  estoque:32},
                {id:5,nome: "Fichario", preco:50, estoque:20},
                {id:6,nome: "Borracha", preco:3,  estoque:85},
                {id:7,nome: "Lancheira",preco:20, estoque:100},
                {id:8,nome: "Caneta",   preco:2, estoque:1000},
                {id:9,nome: "Cola branca",preco:35, estoque:250},
                {id:10,nome: "Borracha", preco:1, estoque:400},
                {id:11,nome: "Lápis de cor", preco:14, estoque:63},
                {id:12,nome: "Apontador", preco:3, estoque:5},
            ],
            automotivo:[],
            cozinha:[
                {id:1,nome: "Panela" , preco:10, estoque:80},
                {id:2,nome: "Cafeteira",   preco:30, estoque:100},
                {id:3,nome: "Louça",  preco:70, estoque:54},
                {id:4,nome: "Copos",preco:5,  estoque:32},
                {id:5,nome: "Fogão", preco:50, estoque:20},
                {id:6,nome: "Geladeira", preco:1, estoque:400},
                {id:7,nome: "Abridor de garrafa", preco:14, estoque:63},
                {id:8,nome: "Forno elétrico", preco:3, estoque:5},
            ],
            petShop:[
                {id:1,nome: "Tapete Higiênico" , preco:10, estoque:80},
            ],
        
        }
    }
    get quantidadeMaximaEstoque(){
        return this._quantidadeMaximaEstoque;
    }
    get quantidadeMinimaEstoque(){
        return this._quantidadeMinimaEstoque
    }
    set quantidadeMaximaEstoque(value){
        this.quantidadeMaximaEstoque = value;
    }
    set quantidadeMinimaEstoque(value){
        this.quantidadeMinimaEstoque = value;
    }
    verificaEstoque(item){
        if(typeof item === 'string'){
           return this.itensEstoque[item].filter(ele => ele.estoque < this.quantidadeMaximaEstoque)
    } else {
        let newArr = []
        Object.values(this.itensEstoque).filter((ele) => ele.forEach((item) => {
            if(item.estoque < this.quantidadeMaximaEstoque)
           newArr.push(item)
        }))
        return newArr
    }
    }
    adicionarItem(info, categoria){
        let {nome, preco, estoque} = info
        
    }

}