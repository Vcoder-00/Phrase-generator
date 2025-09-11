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

let listaDeFrases: Array<Quote> = [];

let currentQuote: Quote;

async function fetchNewPhrase(): Promise<void> {
    fetch("https://echoes.soferity.com/api/quotes/random?lang=en")
        .then((response) => response.json()) // transforma o json recebido em um objeto
        .then((data) => {
            console.log(data);

            // A API  retorna um array, então pegamos o primeiro item com a propriedade correta
            const quote = new Quote(data.quote, data.author)

            exibicaoPrincipal(quote);

            currentQuote = quote;

            return quote;
        }
        )
        .catch(console.error);
}

function exibicaoPrincipal(quote: Quote): void {
    phrase.textContent = quote.text;
    author.textContent = quote.authorship;
}

function saveNewPhrase(): void {
    listaDeFrases.push(currentQuote);
    console.log(listaDeFrases);
}

btnNewPhrase.addEventListener('click', fetchNewPhrase);
btnSave.addEventListener('click', saveNewPhrase)