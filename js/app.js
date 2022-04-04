//class
let ui = new Ui();
let news = new News();
//listener
listener();
function listener() {
  document.querySelector("#submitBtn").addEventListener("click", getNews);
}

//function
function getNews(e) {
  e.preventDefault();

  //get value search
  const search = document.querySelector("#news-name").value;
  //get value country
  const country = document.querySelector("#country").value;
  //get value category
  const category = document.querySelector("#category").value;
  let result = document.querySelector("#result").childNodes;
  if (search !== "" || country !== "" || category !== "") {
    news.query(search, country, category).then((data) => {
      let dataNews = data.data.articles;
      if (dataNews.length > 0) {
        ui.displayNews(dataNews);
      } else {
        ui.printMessage("alert alert-danger text-center", "Not The Found");
      }
    });
  } else {
    ui.printMessage("alert alert-danger text-center", "Values ​​are empty");
  }
  for (const iterator of result) {
    iterator.innerHTML = "";
  }
}
