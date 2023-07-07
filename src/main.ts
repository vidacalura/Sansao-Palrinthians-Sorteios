const textboxSorteio= <HTMLInputElement>document.getElementById("sorteio-textbox");
const sorteioBtn = <HTMLElement>document.getElementById("sortear-btn");
const sortearNovamenteBtn = <HTMLElement>document.getElementById("sortear-dnv-btn");

sorteioBtn.addEventListener("click", mostrarSorteio);
sortearNovamenteBtn.addEventListener("click", () => { window.location.reload(); });

function mostrarSorteio(): void {
    const itens = getItensSorteio(textboxSorteio);
    if (itens === null) {
        alert("Você precisa inserir ao mínimo um nome para sortear.");
        return;
    }

    const itemSorteado = sortear(itens);

    const sorteioDiv = <HTMLDivElement>document.getElementById("sorteio-div");
    const resSorteio = <HTMLDivElement>document.getElementById("res-sorteio");

    sorteioDiv.style.display = "none";
    resSorteio.style.display = "block";

    const itemDiv = <HTMLDivElement>document.querySelector(".item-sorteado");
    itemDiv.textContent = itemSorteado;
}

function sortear(itens: string[]): string | null {
    return itens[Math.floor(Math.random() * itens.length)];
}

function getItensSorteio(textbox: HTMLInputElement): string[] | null {
    if (textbox.value.trim().length === 0)
        return null

    return textbox.value.split("\n");
}