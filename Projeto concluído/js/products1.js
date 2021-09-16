var produtos = [
    {
      "productName": "Bateria Eletrônica",
      "descriptionShort": "Many desktop publishing packages and web page editors now Many",
      "photo": "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-bateria-eletronica.png",
      "price": "R$ 1499,90"
    },
    {
      "productName": "Kit de Pratos",
      "descriptionShort": "Many desktop publishing packages and web page editors now Many",
      "photo": "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-kit-pratos.png",
      "price": "R$ 1499,90"
    },
    {
      "productName": "Pedal Duplo para Bumbo",
      "descriptionShort": "Many desktop publishing packages and web page editors now Many",
      "photo": "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-pedal-duplo-para-dumbo.png",
      "price": "R$ 1499,90"
    },
    {
      "productName": "Módulo para Bateria",
      "descriptionShort": "Many desktop publishing packages and web page editors now Many",
      "photo": "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-modulo-para-bateria.png",
      "price": "R$ 1499,90"
    },

    {
      "productName": "Prato 17” Medium Crash",
      "descriptionShort": "Many desktop publishing packages and web page editors now Many",
      "photo": "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-prato-17-medium-crash.png",
      "price": "R$ 1499,90"
    },
    {
      "productName": "Kit Bag para Tambores",
      "descriptionShort": "Many desktop publishing packages and web page editors now Many",
      "photo": "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-kit-bag-para-tambores.png",
      "price": "R$ 1499,90"
    },
    {
      "productName": "Banco para Bateria",
      "descriptionShort": "Many desktop publishing packages and web page editors now Many",
      "photo": "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-banco-para-bateria.png",
      "price": "R$ 1499,90"
    },
    {
      "productName": "Pedestal para Percussão",
      "descriptionShort": "Many desktop publishing packages and web page editors now Many",
      "photo": "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-pedestal-para-percussao.png",
      "price": "R$ 1499,90"
    },

    {
      "productName": "Mixer de Video",
      "descriptionShort": "Many desktop publishing packages and web page editors now Many",
      "photo": "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-mixer-de-video.png",
      "price": "R$ 1499,90"
    },
    {
      "productName": "Guitarra Jackson",
      "descriptionShort": "Many desktop publishing packages and web page editors now Many",
      "photo": "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-guitarra-jackson.png",
      "price": "R$ 1499,90"
    },
    {
      "productName": "Contrabaixo Elétrico",
      "descriptionShort": "Many desktop publishing packages and web page editors now Many",
      "photo": "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-contrabaixo-eletrico.png",
      "price": "R$ 1499,90"
    },
    {
      "productName": "Sistema de Microfone s/ Fio",
      "descriptionShort": "Many desktop publishing packages and web page editors now Many",
      "photo": "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-sistema-de-microfones-sem-fio.png",
      "price": "R$ 1499,90"
    }
  ]
for (let i = 0; i <= 3; i++){
let descrip = produtos[i].descriptionShort
let preco = produtos[i].price
let prodName = produtos[i].productName

var creImg = document.createElement('img')
creImg.src = produtos[i].photo
var creP1 = document.createElement('p')
var creP2 = document.createElement('p')
var creP3 = document.createElement('p')
var creDiv = document.createElement('div')
var select = document.querySelector('.products-block1')

creDiv.classList.add('anuncio' + [i])
creImg.classList.add('photo-prod')
creP1.classList.add('name-prod')
creP2.classList.add('descri-prod')
creP3.classList.add('price-prod')

select.appendChild(creDiv)
creDiv.appendChild(creImg,creP1,creP2,creP3)
creDiv.appendChild(creP1)
creDiv.appendChild(creP2)
creDiv.appendChild(creP3)

creP1.innerHTML = prodName
creP2.innerHTML = descrip
creP3.innerHTML = preco
}

