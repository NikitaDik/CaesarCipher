const alphabets = {
    english: {
        upperCase: [
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
            'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
        ],
        lowerCase: [
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
            'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
        ]
    },
    russian: {
        upperCase: [
            'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М',
            'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'
        ],
        lowerCase: [
            'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м',
            'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'
        ]
    }
}

const inputText = document.querySelector('.inputText');
const outputText = document.querySelector('.outputText');
const shiftNumber = document.querySelector('.shiftNumber');
const resetButton = document.querySelector('.resetButton');

inputText.addEventListener('input', () => {
    textUpdate();
})

shiftNumber.addEventListener('input', () => {
    textUpdate();
})

resetButton.addEventListener('click', () => {
    inputText.value = '';
    outputText.value = '';
    shiftNumber.value = 0;
})

function textUpdate() {
    const shift = parseInt(shiftNumber.value) || 0;
    outputText.value = textEncrypt(inputText.value, shift);
}

function textEncrypt(text, shift) {
    return text.split('').map((symbol) => {
        return symbolEncrypt(symbol, shift)
    }).join('');
}

function symbolEncrypt(symbol, shift) {
    for (const alphabetsKey in alphabets) {
        for (const languageKey in alphabets[alphabetsKey]) {
            const registr = alphabets[alphabetsKey][languageKey];
            if (registr.includes(symbol)) {
                return registr[(registr.indexOf(symbol) + shift) % registr.length];
            }
        }
    }
    return symbol;
}
