export const processText = (text, { uppercase = false, reverse = false, removeSpecialChars = false } = {}) =>{
    if(uppercase = true){
        text = text.toUpperCase();
    }else text=text;
    if(reverse = true){
        const rev = [...text].reverse().join("");
        console.log(rev);
    }else text=text;
    if(removeSpecialChars = true){
        const run = () => {
            const specials = ['!','@','#','$','%','^','&','*','(',')','-','+']
            const str = [...text];

            let result = str;
            specials.forEach((char) => {
                result = removeChar(result, char);
            });
            return result;
        }
    }else text=text;
}