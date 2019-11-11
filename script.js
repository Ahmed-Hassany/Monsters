document.addEventListener('load', function() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(obj => {
            let card = document.createElement('div');
            let image = document.createElement('img');
            let small = document.createElement('div');
            let title = document.createElement('h5');
            let paragraph = document.createElement('p');
            let link = document.createElement('a');
            card.appendChild(image);
            card.appendChild(small);
            small.appendChild(title);
            small.appendChild(paragraph);
            small.appendChild(link);

        })
        .catch(error => {

        });
})


// function creation() {
//     let card = document.createElement('div');
//     let image = document.createElement('img');
//     let small = document.createElement('div');
//     let title = document.createElement('h5');
//     let paragraph = document.createElement('p');
//     let link = document.createElement('a');
//     card.appendChild(image);
//     card.appendChild(small);
//     small.appendChild(title);
//     small.appendChild(paragraph);
//     small.appendChild(link);

// }