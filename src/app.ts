import {
    phrase,
    author,
    btnNewPhrase,
    btnSave,
    PhrasesList
} from "../src/domElements"

class Quote {
    text: string;
    authorship: string;

    constructor(text: string, authorship: string) {
        this.text = text;
        this.authorship = authorship;
    }
}

let ListaDeFrases: Array<Quote> = [];

async function fetchNewPhrase(): Promise<void> {
    fetch("https://echoes.soferity.com/api/quotes/random?lang=en")
    .then((response) => response.json()) // transforma o json recebido em um
    .then((data) => {
        console.log(data);

    // A API  retorna um array, então pegamos o primeiro item com a propriedade correta
    const quoteText = data.quote;
    const authorName = data.author.replace(/'/g, '');

    const ph1 = new Quote(quoteText, authorName);
    phrase.textContent = ph1.text;
    author.textContent = ph1.authorship;
    }
    )
    .catch(console.error);
}
btnNewPhrase.addEventListener('click', fetchNewPhrase);
fetchNewPhrase();