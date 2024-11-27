const headings = document.querySelectorAll('h2');
console.log(headings);

for (let heading of headings) {
    heading.classList.add('red-text');
}