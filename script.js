window.addEventListener('load', function() {
    fetch("https://api.myjson.com/bins/15g2j6")
        .then(res => res.json())
        .then(obj => {
            for (let i = 0; i < obj.length; i++) {
                let products = document.querySelector("main");
                let card = document.createElement('div');
                card.className = "card";
                let image = document.createElement('img');
                image.className = "card-img-top";
                image.src = obj[i].image;
                let small = document.createElement('div');
                small.className = "card-body";
                let title = document.createElement('h5');
                title.innerText = obj[i].name;
                title.className = "card-title";
                let paragraph = document.createElement('p');
                paragraph.innerText = obj[i].description;
                paragraph.className = "card-text";
                let link = document.createElement('a');
                link.className = "btn btn-primary";
                card.appendChild(image);
                card.appendChild(small);
                small.appendChild(title);
                small.appendChild(paragraph);
                small.appendChild(link);
                products.appendChild(card);
            }

        })
        .catch(error => {
            console.log(error)

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