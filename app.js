const upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const nums = [0,1,2,3,4,5,6,7,8,9];
const symbols = ['!','@','#','$','%','^','&','*','(',')','_','+','='];
const generate = document.querySelector('#generate');
const lengthEl = document.querySelector('#length');
const upperEl = document.querySelector('#upper');
const lowerEl = document.querySelector('#lower');
const numsEl = document.querySelector('#nums');
const symbolsEl = document.querySelector('#symbols');
const ps = document.querySelector('#password');
const copyEl = document.querySelector('.copy');

const generateUpper = () => upper[Math.floor(Math.random() * upper.length)];

const generateLower = () => lower[Math.floor(Math.random() * lower.length)];

const generateNums = () => nums[Math.floor(Math.random() * nums.length)];

const generateSymbols = () => symbols[Math.floor(Math.random() * symbols.length)];

generate.addEventListener('click', (e)=> {
    e.preventDefault();
    let password = '';
    for (let i = 0; i < lengthEl.value; i++) {
        let arr = [];
        if (upperEl.checked) {
            arr.push(generateUpper());
        } 
        if (lowerEl.checked) {
            arr.push(generateLower());
        }
        if (numsEl.checked) {
            arr.push(generateNums());
        }
        if (symbolsEl.checked) {
            arr.push(generateSymbols());
        }
        if (arr.length == 0) {
            return;
        }

        password += arr[Math.floor(Math.random() * arr.length)];
    }

    ps.value = password;
    console.log(password);
})

lengthEl.addEventListener('change', (e) => {
    e.preventDefault();
    if (lengthEl.value < 0) {
        lengthEl.value = 0;
    }
})

copyEl.addEventListener("click", () => {
    ps.select();
    document.execCommand("copy");
});
