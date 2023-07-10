var textboxSorteio = document.getElementById("sorteio-textbox");
var sorteioBtn = document.getElementById("sortear-btn");
var sortearNovamenteBtn = document.getElementById("sortear-dnv-btn");
sorteioBtn.addEventListener("click", mostrarSorteio);
sortearNovamenteBtn.addEventListener("click", function () { window.location.reload(); });
function mostrarSorteio() {
    var itens = getItensSorteio(textboxSorteio);
    if (itens === null) {
        alert("Você precisa inserir ao mínimo um nome para sortear.");
        return;
    }
    var itemSorteado = sortear(itens);
    var sorteioDiv = document.getElementById("sorteio-div");
    var resSorteio = document.getElementById("res-sorteio");
    sorteioDiv.style.display = "none";
    resSorteio.style.display = "block";
    var gif = document.createElement("img");
    gif.style.position = "absolute";
    gif.style.top = "0";
    gif.style.left = "0";
    gif.style.width = "100vw";
    gif.style.height = "100vh";
    gif.src = "./img/contagem.gif";
    var body = document.querySelector("body");
    body.appendChild(gif);
    setTimeout(function () {
        body.removeChild(gif);
    }, 3900);
    var itemDiv = document.querySelector(".item-sorteado");
    itemDiv.textContent = itemSorteado;
}
function sortear(itens) {
    return itens[Math.floor(Math.random() * itens.length)];
}
function getItensSorteio(textbox) {
    if (textbox.value.trim().length === 0)
        return null;
    return textbox.value.split("\n");
}
