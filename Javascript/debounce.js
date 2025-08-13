//Debounce 

function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    }
}

const handleInput = debounce((event) => {
    console.log(event.target.value);
}, 300);
