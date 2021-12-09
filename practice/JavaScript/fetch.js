
url = "https://jsonplaceholder.typicode.com/posts";

fetch(url)
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        data.forEach(element => {
            console.log(element.title);
        });
    })