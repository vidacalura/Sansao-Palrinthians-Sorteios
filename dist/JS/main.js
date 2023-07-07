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
