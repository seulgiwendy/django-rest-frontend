'use strict';

window.onload = () => {
    fetch("http://localhost:8000/articles")
        .then(articles => {
            console.log(articles)
            return articles.json()
        })
        .then(json => {
            console.log(json)
            return json
        })
        .then(articles => {
            for(let article in articles) {
                console.log(article)
            }
        })
}