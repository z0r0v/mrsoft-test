import Api from "./api.js";
import $ from './helper.js';


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
        this.filter = {
            string: '',
            caseSensitive: false
        };
        this.caseSensitive = caseSensitive;
        this.input = input;
        this.buttonFindForLength = buttonFindForLength;
        this.buttonFindForSubString = buttonFindForSubString;

        this.input.addEventListener('blur', this.handleInputBlur('string'));
        this.caseSensitive.addEventListener('change', this.handleCheckBoxChange('caseSensitive'));
        this.buttonFindForLength.addEventListener('click', this.handleFindForLengthClick);
        this.buttonFindForSubString.addEventListener('click', this.handleFindForSubStringClick);
        this.loadData();
    };

    handleInputBlur = (key) => (evt) => {
        const value = evt.target.value;

        this.changeFilter(key, value);
    };

    handleCheckBoxChange = (key) => (evt) => {
        const value = evt.target.value;

        this.changeFilter(key, value);
    };

    handleFindForLengthClick = () => {
        this.searchByLength();
    };

    handleFindForSubStringClick = () => {
        this.searchBySubString();
    };

    searchByLength() {
        const length = parseInt(this.filter.string, 10);

        if (length) {
            this.data = this.loadedData.filter(it => it.length > length);
            this.render();
        }

    };

    searchBySubString() {
        const {string, caseSensitive} = this.filter;
        const flag = caseSensitive ? 'i' : '';
        const regexp = new RegExp(string, flag);

        if (string) {
            this.data = this.loadedData.filter(it => regexp.test(it))
        }

        this.render();
    };

    changeFilter(key, value) {
        this.filter = {
            ...this.filter,
            [key]: value
        }
    };

    loadData() {
        Api.loadData().then(data => {
            this.loadedData = data;
            this.data = data;
        }).then(() => this.render());
    };

    renderList() {
        const items = this.data;
        let list = $('list');

        if (list) {
            list.innerHTML = '';
        } else {
            list = document.createElement('div');
            list.id = 'list';
            list.classList.add('list');
        }

        items.map(it => {
            const item = document.createElement('p');
            item.classList.add('list-item');
            item.innerText = it;
            list.appendChild(item);
        });
        return list;


    };

    render() {
        const listOutput = this.renderList();

        this.root.appendChild(listOutput);
    };
}

new App(config);













