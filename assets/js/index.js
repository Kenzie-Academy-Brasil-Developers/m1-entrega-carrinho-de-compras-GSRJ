const productsCart = [
  {
    id: 1,
    name: "Uva Crimson",
    price: 44.99,
  },
  {
    id: 2,
    name: "Vinho Canção",
    price: 17.98,
  },
  {
    id: 3,
    name: "Água de coco",
    price: 8.99,
  },
  {
    id: 4,
    name: "Mamão",
    price: 9.98,
  },
  {
    id: 5,
    name: "Água tônica",
    price: 17.98,
  },
];

const body = document.querySelector("body");
const main = document.createElement("main");
const productList = document.createElement("ul");

body.append(main);
main.append(productList);

produtos(productsCart);
function produtos(lista) {
  let nomeProduto = "";
  let precoProduto = 0;
  let somaProdutos = 0;

  let productDetails = document.createElement("li");
  productDetails.classList.add("firstLine");

  let textoItem = document.createElement("h2");
  let textoValor = document.createElement("h2");

  textoItem.innerText = "Item";
  textoValor.innerText = "Valor";

  productDetails.append(textoItem, textoValor);
  productList.appendChild(productDetails);

  for (let i = 0; i < lista.length; i++) {
    nomeProduto = lista[i].name;
    precoProduto = lista[i].price;
    somaProdutos += lista[i].price;

    let productDetails = document.createElement("li");
    let itemNome = document.createElement("h2");

    itemNome.innerText = nomeProduto;

    let itemPreco = document.createElement("p");

    itemPreco.innerText = "R$ " + precoProduto;

    productDetails.appendChild(itemNome);
    productDetails.appendChild(itemPreco);
    productList.appendChild(productDetails);
  }

  let linhaFInal = document.createElement("li");
  linhaFInal.classList.add("final");

  let total = document.createElement("h2");
  total.innerText = "Total";

  let tagSoma = document.createElement("p");
  tagSoma.innerText = "R$ " + somaProdutos;

  linhaFInal.append(total, tagSoma);
  productList.appendChild(linhaFInal);
}

let button = document.createElement("button");
button.type = "submit";
button.innerHTML = "Finalizar compra";

console.log(button);
main.appendChild(button);
