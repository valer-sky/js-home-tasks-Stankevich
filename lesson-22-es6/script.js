"use strict";

window.onhashchange = renderNewState;
  const AjaxHandlerScript = "http://fe.it-academy.by/AjaxStringStorage2.php";
  let articleNavList = "";
  let articleID = "";

  let articles = [
    { title: "Aprilia", id: "aprilia" },
    { title: "Beta", id: "beta" },
    { title: "BMW", id: "bmw" },
    { title: "Ducati", id: "ducati" },
    { title: "Gasgas", id: "gasgas" },
    { title: "Harley-Davidson", id: "harley" },
    { title: "Honda", id: "honda" },
    { title: "Husqvarna", id: "husqvarna" },
    { title: "Kawasaki", id: "kawasaki" },
    { title: "KTM", id: "ktm" },
    { title: "Suzuki", id: "suzuki" },
    { title: "Triumph", id: "triumph" },
    { title: "Yamaha", id: "yamaha" },
  ];    

  function update() {
    $.ajax({
      url: AjaxHandlerScript,
      type: "POST",
      datatype: "json",
      data: {
        f: "READ",
        n: "OSTROUH_ARTICLES",
        },
      cache: false,
      success: motoListReady,
      error: errorHandler,
    })
  }

  function motoListReady(data) {
    let articlesA = JSON.parse(data.result).sort(sortByName);
    let capitalLetters = [];
    articleNavList = "";

      for (let i = 0; i < articlesA.length; i++) {
        const moto_list = document.getElementById("moto_list");
        let article = articlesA[i];
        let firstLetter = article.title.substr(0, 1);
        articleNavList += '<li><a id="' + article.id + '" onclick="switchToArticle()" style="text-decoration: underline; cursor: pointer;">' +
        article.title + '</a></li>';
            
          if (!capitalLetters.includes(firstLetter)) {
            capitalLetters.push(firstLetter);
            var div = document.createElement("div");
            const letter = document.createElement("h3");
            letter.innerHTML = firstLetter;
            div.appendChild(letter);
            moto_list.appendChild(div);
          }
          const p = document.createElement("p");
          const a = document.createElement("a");
          a.style.cssText = 'text-decoration: underline; cursor: pointer;';
          a.id = article.id;
          a.setAttribute("onclick", "switchToArticle()");
          a.innerHTML = article.title;
          p.appendChild(a);
          div.appendChild(p);
          moto_list.appendChild(div);
      }
        articleNavList = '<ul>' + articleNavList + '</ul>';
  }

  function sortByName(a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  }

  function openArticle() {
    $.ajax({
      url: `htmlPages/${articleID}.html`,
      type: "GET",
      dataType: "html",
      success: DataLoaded,
      error: errorHandler,
      })
  }

  function DataLoaded(data) {
    document.querySelector("#moto_item").innerHTML = data;
    createArticleList();
  }

  function createArticleList() {
    if (articleNavList === '') {
      $.ajax({
        url: AjaxHandlerScript,
        type: "POST",
        datatype: "json",
        data: {
          f: "READ",
          n: "OSTROUH_ARTICLES",
        },
        cache: false,
        success: function(data) {
        let articlesA = JSON.parse(data.result).sort(sortByName);
          for (let i = 0; i < articlesA.length; i++) {
            let article = articlesA[i];
            articleNavList += '<li style="cursor: pointer;"><a style="text-decoration: underline;"  id="' + article.id + '" onclick="switchToArticle()">' +
            article.title + '</a></li>';
          }
            articleNavList = '<ul>' + articleNavList + '</ul>';

          let sidebar = document.querySelector("#nav");
          document.querySelector("#nav").innerHTML = articleNavList;
        },
          error: errorHandler,
      })
        }
        let sidebar = document.querySelector("#nav");
        document.querySelector("#nav").innerHTML = articleNavList;
      }

  function errorHandler(jqXHR, StatusStr, ErrorStr) {
    alert(StatusStr + " " + ErrorStr);
  }

  //SPA
  function renderNewState() {
    const hash = window.location.hash;
    let state = decodeURIComponent(hash.substr(1));
    (state === "") ? state = { page: "Main" } : state = JSON.parse(state);

      if (state.page !== "Main" && state.page !== "Menu" && state.page !== "") articleID = state.page;
      let page = "";

        switch (state.page) {
          case "Main":
            page += "<h1>Энциклопедия</h1>";
            page +=
              '<section id="main"><p class="main_info">В данной энциклопедии вы найдете описание наиболее' +
              " известных марок мотоциклов</p>";
            page +=
              '<p class="main_info"><a style="text-decoration: underline; cursor: pointer;" onclick="switchToMenu()">Список статей здесь</a></p></section>';
            break;
          case "Menu":
            update();
            page += "<h2>Оглавление</h2>";
            page += '<section id="moto_list"></section>';
            page +=
              '<input id="button" type="button" style="cursor: pointer;" value="На главную" onclick="switchToMain()">';
            break;
          case `${articleID}`:
            openArticle();
            page += '<section id="moto_item"></section>';
            page += '<aside id="nav"></aside>';
            break;
        }
        document.querySelector(".page").innerHTML = page;
      }

      function switchToState(state) {
        window.location.hash = encodeURIComponent(JSON.stringify(state));
      }

      function switchToMain(state) {
        switchToState({ page: "Main" });
      }

      function switchToMenu(state) {
        switchToState({ page: "Menu" });
      }

      function switchToArticle(state) {
        articleID = event.target.id;
        switchToState({ page: `${articleID}` });
      }

    renderNewState();