import Api from "./api.js";


function $(elem) {
    return document.getElementById(elem);
}

const root = $("app");
const input = $("input");
const checkBox = $('checkBox');
const buttonFindForLength = $('buttonFindForLength');
const buttonFindForSubString = $('buttonFindForSubString');


const config = {
    root,
    input,
    caseSensitive: checkBox,
    buttonFindForLength,
    buttonFindForSubString,
};


class App {
    constructor({root, input, caseSensitive, buttonFindForLength, buttonFindForSubString}) {
    this.root = root;
    this.loadedData = [];
    this.data = [];
    this.filter = null;

    this.caseSensitive = caseSensitive;
    this.input = input;
    this.buttonFindForLength = buttonFindForLength;
    this.buttonFindForSubString = buttonFindForSubString;

    this.input.addEventListener('blur', this.handleInputBlur('string'));
    // this.caseSensitive.addEventListener();
    // this.buttonFindForLength.addEventListener();
    // this.buttonFindForSubString.addEventListener();

    this.loadData();

    }

    handleInputBlur = (key) => (evt) => {
        const value = evt.target.value;
        this.changeFilter(key, value);
    };


    changeFilter(key, value) {
        this.filter = {
            ...this.filter,
            [key]: value
        }
    }

    loadData() {
        Api.loadData().then(data => {
           this.loadData = data;
           this.data = data;
        }).then(() => this.render());
    }

    renderList() {
        const items = this.data;
        let list = $('list');

        if(list) {
            list.innerHTML = '';
        } else {
            list = document.createElement('div');
            list.id = 'list';
            list.classList.add('list');
        }

        items.map(it => {
            const item = document.createElement('div');
            item.classList.add('list-item');
            item.innerText = it;
            list.appendChild(item);
        });
        return list;


    }
    render() {
        const listOutput = this.renderList();

        this.root.appendChild(listOutput);
    }
}

new App(config);













