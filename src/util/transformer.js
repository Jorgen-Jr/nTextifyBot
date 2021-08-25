const owoFier = require("../../vendor/owoify.js");

module.exports = {
    backwards(text) {
        let result = new Array(text.length);
        let last = text.length - 1;

        for (let i = last; i >= 0; --i) {
            result[last - i] = text.charAt(i);
        }

        return result.join('');
    },
    upsideDown(text) {
        const table = { a: "ɐ", b: "q", c: "ɔ", d: "p", e: "ǝ", f: "ɟ", g: "ɓ", h: "ɥ", i: "ı", j: "ɾ", k: "ʞ", l: "l", m: "ɯ", n: "u", p: "d", r: "ɹ", t: "ʇ", v: "ʌ", w: "ʍ", y: "ʎ", A: "∀", B: "ᙠ", C: "Ɔ", D: "ᗡ", E: "Ǝ", F: "Ⅎ", G: "⅁", J: "ſ", K: "⋊", L: "˥", M: "W", P: "Ԁ", Q: "Ό", R: "ᴚ", T: "⊥", U: "∩", W: "M", V: "Λ", Y: "⅄", 1: "⇂", 2: "ᄅ", 3: "Ɛ", 4: "ㄣ", 5: "ގ", 6: "9", 7: "ㄥ", "&": "⅋", ".": "˙", '"': "„", ";": "؛", "[": "]", "(": ")", "{": "}", "?": "¿", "!": "¡", "'": ",", "<": ">", "‾": "_", "¯": "_", "‿": "⁀", "⁅": "⁆", "∴": "∵", "\r": "\n", "ß": "ᙠ", "̈": "̤", "ä": "ɐ̤", "ö": "o̤", "ü": "n̤", "Ä": "∀̤", "Ö": "O̤", "Ü": "∩̤", "´": " ̗", "é": "ǝ̗", "á": "ɐ̗", "ó": "o̗", "ú": "n̗", "É": "Ǝ̗", "Á": "∀̗", "Ó": "O̗", "Ú": "∩̗", "`": " ̖", "è": "ǝ̖", "à": "ɐ̖", "ò": "o̖", "ù": "n̖", "È": "Ǝ̖", "À": "∀̖", "Ò": "O̖", "Ù": "∩̖", "^": " ̮", "ê": "ǝ̮", "â": "ɐ̮", "ô": "o̮", "û": "n̮", "Ê": "Ǝ̮", "Â": "∀̮", "Ô": "O̮", "Û": "∩̮" }

        let result = new Array(text.length);
        let last = text.length - 1;

        for (let i = last; i >= 0; --i) {
            let c = text.charAt(i)
            let r = table[c]
            result[last - i] = r != undefined ? r : c
        }

        return result.join('');
    },
    mirrored(text) {
        const table = { a: "ɒ", b: "d", c: "ɔ", e: "ɘ", f: "Ꮈ", g: "ǫ", h: "ʜ", j: "ꞁ", k: "ʞ", l: "|", n: "ᴎ", p: "q", r: "ɿ", s: "ꙅ", t: "ƚ", y: "ʏ", z: "ƹ", B: "ᙠ", C: "Ɔ", D: "ᗡ", E: "Ǝ", F: "ꟻ", G: "Ꭾ", J: "Ⴑ", K: "⋊", L: "⅃", N: "Ͷ", P: "ꟼ", Q: "Ọ", R: "Я", S: "Ꙅ", Z: "Ƹ", 1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", "&": "", ";": "", "[": "]", "(": ")", "{": "}", "?": "⸮", "<": ">", "ä": "ɒ̈", "ß": "ᙠ", "´": "`", "é": "ɘ̀", "á": "ɒ̀", "ó": "ò", "ú": "ù", "É": "Ǝ̀", "Á": "À", "Ó": "Ò", "Ú": "Ù", "`": "´", "è": "ɘ́", "à": "ɒ́", "È": "Ǝ́", "ê": "ɘ̂", "â": "ɒ̂", "Ê": "Ǝ̂", "Ø": "ᴓ", "ø": "ᴓ" }

        let result = new Array(text.length);
        let last = text.length - 1;

        for (let i = last; i >= 0; --i) {
            let c = text.charAt(i)
            let r = table[c]
            result[last - i] = r != undefined ? r : c
        }

        return result.join('');
    },
    tiny(text) {
        const table = {
            A: "ᴬ", B: "ᴮ", C: "ᶜ", D: "ᴰ", E: "ᴱ", F: "ᶠ", G: "ᴳ", H: "ᴴ", I: "ᴵ", J: "ᴶ", K: "ᴷ", L: "ᴸ", M: "ᴹ", N: "ᴺ", O: "ᴼ", P: "ᴾ", Q: "ᵠ", R: "ᴿ", S: "ˢ", T: "ᵀ", U: "ᵁ", V: "ⱽ", W: "ᵂ", X: "ˣ", Y: "ʸ", Z: "ᶻ",
            0: "⁰", 1: "¹", 2: "²", 3: "³", 4: "⁴", 5: "⁵", 6: "⁶", 7: "⁷", 8: "⁸", 9: "⁹", a: "ᵃ", b: "ᵇ", c: "ᶜ", d: "ᵈ", e: "ᵉ", f: "ᶠ", g: "ᵍ", h: "ʰ", i: "ᶦ", j: "ʲ", k: "ᵏ", l: "ˡ", m: "ᵐ", n: "ⁿ", o: "ᵒ", p: "ᵖ", q: "ᵠ", r: "ʳ", s: "ˢ", t: "ᵗ", u: "ᵘ", v: "ᵛ", w: "ʷ", x: "ˣ", y: "ʸ", z: "ᶻ",
            "+": "⁺", "-": "⁻", "=": "⁼", "(": "⁽", ")": "⁾", "!": "ᵎ", "?": "ˀ"
        }

        let result = new Array(text.length);
        let last = text.length - 1;

        for (let i = last; i >= 0; --i) {
            let c = text.charAt(i)
            let r = table[c]
            result[i] = r != undefined ? r : c
        }

        return result.join('');

    },
    owo(text) {
        const owo = new owoFier();

        return owo.owoify(text);
    }
}