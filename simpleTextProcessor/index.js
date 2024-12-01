const processText = (text, { uppercase = false, reverse = false, removeSpecialChars = false } = {}) => {

    let pText = [...text]; // spread

    if (removeSpecialChars) {
        pText = pText.filter(char => /[a-zA-Z0-9\s]/.test(char)); // zwraca tylko elementy tablicy spelniajace warunek 
    }

    if (reverse) {
        pText = pText.reverse();
    }

    if (uppercase) {
        pText = pText.map(char => char.toUpperCase()); // map wywoluje dana funkcje w odniesieniu do kazdego elementu tablicy
    }

    pText = pText.join(''); // tablica -> string

    console.log(pText);
};

processText("abcd%#%^", { uppercase: true, reverse: true, removeSpecialChars: true }); 