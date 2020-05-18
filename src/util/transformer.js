module.exports ={
    backwards(text){
        let backwards_text = text.split('').sort((a, b) =>  a - b).join('');

        return backwards_text;
    }
}