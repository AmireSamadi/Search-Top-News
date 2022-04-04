class Ui {
  constructor() {
    this.result = document.querySelector("#result");
  }

  //display message
  printMessage(className, message) {
    let result = document.querySelector("#message");
    let div = document.createElement("div");
    div.innerHTML = message;
    div.className = className;
    result.appendChild(div);
    setTimeout(() => {
      this.removeMassage();
    }, 3000);
  }

  //remove massage Warning
  removeMassage() {
    let message = document.querySelector(".alert-danger");
    message.remove();
  }

  //show news
  displayNews(dataNews) {
    dataNews.forEach((news) => {
      this.result.innerHTML += `
      <div class=" col-sm-11 col-md-5 col-lg-4  ">
          <div class="card m-3" style="width: 18rem;">
                <img class="card-img-top" src="${news.urlToImage}" style="height:10rem" alt="Card image cap">
             <div class="card-body">
                <h5 class="card-title">title:${news.title.slice(0,40)}...</h5>
                <p class="card-text">${news.description.slice(0,120)}...</p>
                <span class="badge badge-info m-2">publishedAt: ${news.publishedAt}</span><br/>
                <span class="badge badge-info m-2">source: ${news.source.name} </span>
                <a href="${news.url}" class="btn btn-primary d-block">Go To News</a>
              </div>
          </div>
       </div>
      `;
    });
  
  }
}
