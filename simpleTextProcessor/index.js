const processText = (text, { uppercase = false, reverse = false, removeSpecialChars = false } = {}) => {

    let pText = [...text]; 

    if (removeSpecialChars) {
        pText = pText.filter(char => /[a-zA-Z0-9\s]/.test(char));
    }

    if (reverse) {
        pText = pText.reverse();
    }

    if (uppercase) {
        pText = pText.map(char => char.toUpperCase());
    }

    pText = pText.join('');

    console.log(pText);
};

processText("abcd%#%^", { uppercase: true, reverse: true, removeSpecialChars: true }); 
