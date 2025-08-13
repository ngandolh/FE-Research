//Throttle 

function throttle(fn, limit) {
    let lastCall = 0;
    return function (...args) {
        const now = Date.now();
        if (now - lastCall >= limit) {
            lastCall = now;
            fn.apply(this, args);
        }
    }
}

const handleScroll = throttle(function () {
    console.log('Scroll event fired!');
}, 1000);

window.addEventListener('scroll', handleScroll);