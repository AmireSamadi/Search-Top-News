class News {
  constructor() {
    this.api = "";
  }
  //send url for api
  async query(search, country, category) {
    //creat url
    let url = "https://newsapi.org/v2/";
    //check the value search and country and category
    if (search == "" || country !== "" || category !== "") {
      url += "top-headlines?";
    } else {
      url += "everything?";
    }

    // if search exit
    if (search !== "") {
      url += `q=${search}&`;
    }

    // if country exit
    if (country !== "") {
      url += `${country}&`;
    }

    // if category exit
    if (category !== "") {
      url += `${category}&`;
    }

    //api key adding to url
    url += `apiKey=5d11206c469144c7a813a2c98c9b6082`;

    let sendApi = await fetch(url);
    let data = await sendApi.json();
    return {
      data,
    };
  }
}
