const formEl = document.getElementById('form-calculator-beer');
const minusEl = document.getElementById('minus-btn');
const addEl = document.getElementById('add-btn');

const containerMlEl = document.getElementById('container-input-form-ml');
const containerValueEl = document.getElementById('container-input-form-value');

function addInput() {
    makeInput();
}

function minusInput() {
    if(containerMlEl.children.length <= 4 && containerValueEl.children.length <= 4){
        alert('Não foi possível excluir o input')
    }else{
        containerMlEl.lastChild.remove();
        containerValueEl.lastChild.remove();
    }
}

function makeInput() {
    const containerInputMililitrosEl = document.getElementById('container-input-form-ml');
    const containerInputValue = document.getElementById('container-input-form-value');
    const inputMl = document.createElement('input');
    const inputValue = document.createElement('input');

    inputMl.classList.add('input');
    inputMl.setAttribute('type', 'number');
    inputMl.setAttribute('id', 'input-ml');
    inputMl.setAttribute('placeholder', '437');

    inputValue.classList.add('input');
    inputValue.setAttribute('type', 'number');
    inputValue.setAttribute('id', 'input-value');
    inputValue.setAttribute('placeholder', 'R$ 5.48');

    containerInputMililitrosEl.appendChild(inputMl);
    containerInputValue.appendChild(inputValue);
}

function isValid(e) {
    return true
}

function showAlert(calc){
    // Modal
}

function cleanInputs(){
    console.log(containerMlEl.children);
}

minusEl.addEventListener('click', minusInput);

addEl.addEventListener('click', addInput);

formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!isValid(e)) {
        alert('Verifique os campos abaixo!')
    }

    let inputMl = [];
    let inputValue = [];
    let inputs = [];

    for (let i = 0; i < e.target.length; i++) {
        if (e.target[i].id === 'input-ml' && e.target[i].value !== '') {
            inputMl.push(e.target[i].value)
        } else if (e.target[i].id === 'input-value' && !e.target[i].value !== '') {
            inputValue.push(e.target[i].value)
        }
    }

    for (let i = 0; i < inputMl.length; i++) {
        let input = {
            ml: 0,
            value: 0,
            div: 0
        }
        input.ml = +inputMl[i];
        input.value = +inputValue[i];
        input.div = +inputMl[i] / +inputValue[i];
        inputs.push(input);
    }

    console.log(inputs);

    let result = inputs.reduce((accumulator, calc) => {
        if(calc.div >= accumulator){
            accumulator = calc;
        }
        return accumulator
    }, 0);

    showAlert(result);
    cleanInputs();
})