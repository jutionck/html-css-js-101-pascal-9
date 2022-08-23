function loadAnime() {
  fetch('../../anime.json')
    .then(response => response.json())
    .then(data => {
      document.getElementById('data-anime').innerHTML = ""
      const json = JSON.stringify(data.anime);
      const result = JSON.parse(json);
      for (let i = 0; i < result.length; i++) {
        document.getElementById('data-anime').innerHTML += `
              <div class="card">
                      <img src="${result[i].img}" alt="">
                      <div class="card-body">
                          <h4>${result[i].name}</h4>
                          <p>${result[i].skill}</p>
                      </div>
                  </div>`;
      }
    }).catch(err => {
      console.error(err);
    })
}

loadAnime();