lista = [
  "https://i.ytimg.com/vi/317jz-PU7Mg/maxresdefault.jpg",
  "https://i.ytimg.com/vi/q_7Y24A6oFY/maxresdefault.jpg",
  "https://i.ytimg.com/vi/j3GoK90M5aM/maxresdefault.jpg",
  "https://i.pinimg.com/originals/e6/0c/f1/e60cf1b4bbabcef8934efa03329d35de.jpg",
  "https://i.ytimg.com/vi/72NfSwCzFVE/hqdefault.jpg"
];
document.getElementById("gatinho").value =
  "https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1515597533000/photosp/09afc867-3b6f-4d24-a6a2-66603a0fcf5e/stock-photo-cat-tabby-tabby-cat-crazy-cat-scottish-fold-cat-eyes-cat-face-cat-head-brown-tabby-09afc867-3b6f-4d24-a6a2-66603a0fcf5e.jpg";

var elementoImagem = document.getElementById("imagem");

for (var i = 0; i < lista.length; i++) {
  elementoImagem.innerHTML += "<img src=" + lista[i] + ">";
}

function Adicionar() {
  var gato = String(document.getElementById("gatinho").value);
  console.log(gato);
  lista.push(gato);
  var numeroLista = lista.length - 1;
  console.log(numeroLista);
  console.log(lista[numeroLista]);

  //for (var i = 0; i < lista.length; i++) {
  if (document.getElementById("gatinho").value != "") {
    elementoImagem.innerHTML += "<img src=" + lista[numeroLista] + ">";
    document.getElementById("gatinho").value = "";
  }
  //}

  //document.write("<img src=" + lista[numeroLista]+ ">")
}