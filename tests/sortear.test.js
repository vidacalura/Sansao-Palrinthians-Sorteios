function sortear(itens) {
    return itens[Math.floor(Math.random() * itens.length)];
}

describe("Sorteios", () => {
    it("sorteia 3 números de 1 a 3", () => {
        let um = 0, dois = 0, tres = 0;
        
        for (let i = 0; i < 1000; i++) {
            const s = sortear([1, 2, 3]);
    
            if (s === 1) { um++; }
            else if (s === 2) { dois++; }
            else if (s === 3) { tres++; }
        }
    
        console.log(`1: ${um}\n2: ${dois}\n3: ${tres}`);
        expect(um > 300 && dois > 300 && tres > 300 && um + dois + tres === 1000).toBe(true);
    });
});