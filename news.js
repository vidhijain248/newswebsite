console.log("This is my news project");
// 460d6ea0383b4be5a84061804178057e
let source = "google-news";
// let source = "the-times-of-india";
let apikey = "460d6ea0383b4be5a84061804178057e";
// grab the news container
let newsAccordion = document.getElementById("newsAccordion")
// craete a http request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apikey=${apikey}`, true);

// what to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHTML=""
        articles.forEach(function(element,index){
        // for (news in articles) {
        //     console.log(articles[news]);
            let news = `
                        <div class="accordion-item">
                                        <h2 class="accordion-header" id="heading${index}">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                                             <b><i> BREAKING NEWS${index+1}</b></i> &nbsp ${element["title"]}
                                            </button>
                                        </h2>
                                        <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}"
                                            data-bs-parent="#newsAccordion">
                                            <div class="accordion-body">
                                                ${element["content"]}.<a href="${element['url']}" target="_blank"> Read more here</a> 
                                            </div>
                                            
                                        </div>
                        </div>`
                        newsHTML += news;
                    });
        newsAccordion.innerHTML=newsHTML
    }
    else {
        console.log("Some error occured")
    }
}
xhr.send();

