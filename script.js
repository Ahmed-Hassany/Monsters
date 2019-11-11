document.addEventListener('load',function(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(obj => {
        
        
    })
    .catch(error => {
        
    } );
})