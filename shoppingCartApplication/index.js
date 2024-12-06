class Cart {
    constructor() {
        this.products = []; 
    }

    addProduct({ name, price, quantity = 1 }) {
        const existingProductIndex = this.products.findIndex(product => product.name === name); // zwraca -1 jesli produkt nie istnieje
        if (existingProductIndex !== -1) { 
            this.products[existingProductIndex] = {
                ...this.products[existingProductIndex],
                quantity: this.products[existingProductIndex].quantity + quantity
            };
        } else {
            this.products = [...this.products, { name, price, quantity }];
        }
        console.log(`Dodano: ${name}, cena: ${price}, ilość: ${quantity}`);
    }

    removeProduct(name) {
        const productIndex = this.products.findIndex(product => product.name === name);
        if (productIndex !== -1) {
            this.products = this.products.filter(product => product.name !== name);
            console.log('usunieto produkt');
        } else {
            console.log('nie posiadasz takiego produktu w koszyku');
        }
    }

    showCart() {
        if (this.products.length === 0) {
            console.log('koszyk jest pusty');
        }else{
            console.log('zawartosc koszyka:');

            this.products.forEach(({ name, price, quantity }) => {
            console.log(`nazwa produktu: ${name}, cena: ${price}, ilosc: ${quantity}`);
            });

            const total = this.products.reduce((a, { price, quantity }) => a + price * quantity, 0);
            console.log(`laczna cena produktow: ${total.toFixed(2)}`); 
        }
    }
}

const cart = new Cart();

cart.addProduct({ name: "piwo", price: 20, quantity: 100 });
cart.addProduct({ name: "chleb", price: 10, quantity: 1 });

cart.showCart();

cart.removeProduct("piwo");
cart.showCart();

