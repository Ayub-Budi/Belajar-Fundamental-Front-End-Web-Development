class item extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set movie(movie) {
    this._movie = movie;
    this.render();
  }
  

  toggleParagrafRingkas() {
    const paragrafRingkas = this.shadowRoot.querySelector('#paragraf-ringkas'); // Use shadowRoot
    const tombolBacaSelengkapnya = this.shadowRoot.querySelector("#tombol-baca-selengkapnya"); // Use shadowRoot

    // Check if maxHeight is 'none' or empty string
    if (paragrafRingkas.style.maxHeight === 'none' || paragrafRingkas.style.maxHeight === '') {
      paragrafRingkas.style.maxHeight = '30px'; // Set the maximum height as needed
      tombolBacaSelengkapnya.textContent = 'Baca Selengkapnya'; // Update button text
    } else {
      paragrafRingkas.style.maxHeight = 'none'; // Remove maximum height
      tombolBacaSelengkapnya.textContent = 'Sembunyikan'; // Update button text
    }
  }

  render() {
    this.shadowDOM.innerHTML = `
          <style>
              * {
                  margin: 0;
                  padding: 0;
                  box-sizing: border-box;
              }
              :host{
                display: flex;
                width: 25%;
                padding: 10px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                border-radius: 5px;
              }
              img {
                width: 100%;
              }

              #paragraf-ringkas {
                overflow: hidden;
                max-height: 30px; /* Set tinggi maksimum paragraf ringkas di sini */
              }

              @media screen and (max-width: 550px) {
                :host {
                  width: 100%;
                }
              }
          
          </style>
            <div class="daftar" data-id="${this._movie.id}">
              <div id="${this._movie.name}">
                <img src="https://image.tmdb.org/t/p/w500/${this._movie.poster_path}" class="card-img card-img-top" alt="${this._movie.name}" />
                <h2>${this._movie.title}</h2>
                <h3>Tahun rilis : ${this._movie.release_date}</h3>
                <h3>Views: ${this._movie.popularity}</h3>
                <div id="paragraf-ringkas">
                  <p> ${this._movie.overview}</p>
                </div>

                <br>
                <button id="tombol-baca-selengkapnya" onclick="this.toggleParagrafRingkas()">Baca Selengkapnya</button>
              </div>
            </div>
            `;
            const tombolBacaSelengkapnya = this.shadowDOM.querySelector('#tombol-baca-selengkapnya');
          tombolBacaSelengkapnya.onclick = this.toggleParagrafRingkas.bind(this);
        }
        
}

customElements.define("app-item", item);
