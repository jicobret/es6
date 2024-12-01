const products = [
    { name: "chleb", price: 10, category: "jedzenie" },
    { name: "kielbasa", price: 30, category: "jedzenie" },
    { name: "piwo", price: 50, category: "picie" },
    { name: "woda", price: 5, category: "picie" },
    { name: "koszulka", price: 200, category: "ubrania" },
    { name: "spodnie", price: 250, category: "ubrania" },
    { name: "telefon", price: 1000, category: "elektronika" },
    { name: "laptop", price: 2000, category: "elektronika" }
];

const filterProducts = (products, { category, minPrice = 0, maxPrice = Infinity } = {}) => {
    return products // zwraca produkty spelniajace filtry
        .filter(({ price }) => price >= minPrice && price <= maxPrice) // filtracja po cenie
        .filter(({ category: pCategory }) => !category || pCategory === category); // filtracja po kategorii
};

const display = (fProducts) => {
    if (fProducts.length === 0) {
        console.log("brak produktow spelniajacych podane kryteria");
    }

    fProducts.forEach(({ name, price, category }) => {
        console.log(`nazwa produktu: ${name}, cena: ${price}, kategoria: ${category}`);
    });
};

display(filterProducts(products, { category: "elektronika", minPrice: 800, maxPrice: 1200 }));
