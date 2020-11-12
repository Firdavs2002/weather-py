'use strict';

const hi = 'Узнайте погоду !';
const out = document.querySelector('h1');

let i = 0;

setTimeout (() => {
    setInterval(() => {
        if (i === hi.length) return clearInterval(100);
        out.textContent += hi[i];
        i++
    }, 100);
}, 1000);

async function show_weather() {
	const place = document.querySelector('input').value.toLowerCase().trim();

	const res = await eel.get_weather(place)();
	if (res.err) {
		document.querySelector('.output').innerHTML = res.err;
		return;
	}
	document.querySelector('.output').innerHTML = `
		В регеоне ${place} сейчас ${res['temp']} <sup>o</sup>C <br> 
		макс: ${res['temp_max']} <sup>o</sup>C | мин: ${res['temp_min']} <sup>o</sup>C
	`;		
}

document.querySelector('form').addEventListener('submit', evt => {
	evt.preventDefault();
	show_weather();
});