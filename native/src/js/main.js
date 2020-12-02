import Api from "./api.js";
const api = new Api();
let localData = [];


api.getData().then(data => localData = data);


function getNextData() {
    setTimeout(function () {
        api.getData().then(data => localData = data);
        getNextData();
    }, 86400);

}

getNextData();



const methods = {
    $: function (elem) {
        return document.querySelector(elem);
    },
    getElemLen: function () {
        let results = localData.filter(item => item.length > domElem.input.value);
        methods.addElem(results);
    },
    getElemStr: function () {
        if (domElem.chInput.checked) {
            let results = localData.filter(item => item === domElem.input.value);
            methods.addElem(results);
        } else {
            let results = localData.filter(item => item.toLowerCase() === domElem.input.value.toLowerCase());
            methods.addElem(results);

        }
    },
    addElem: function (result) {
        domElem.dataBlock.innerHTML = "";
        result.forEach(function (elem) {
            const p = document.createElement('p');
            p.classList.add("data-block__data--item");
            p.innerText = elem;
            domElem.dataBlock.appendChild(p);
        })
    },
    addEvent: function (elem, typeEvent, callback) {
        elem.addEventListener(typeEvent, callback);
    },
};

const domElem = {
    input: methods.$('.my-form input'),
    bNumb: methods.$('.my-form__num'),
    bStr: methods.$('.my-form__str'),
    chInput: methods.$('.my-form__cb-box input'),
    dataBlock: methods.$('.data-block__data'),
};


methods.addEvent(domElem.bNumb, "click", methods.getElemLen);
methods.addEvent(domElem.bStr, "click", methods.getElemStr);













