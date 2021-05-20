const button = document.querySelector('button');
const h1 = document.querySelector('h1');

const newColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const rgb = `rgb(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor = rgb;
    h1.innerText = rgb;
}

button.addEventListener('click', newColor)