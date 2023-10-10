import logo from "../../img/Ym.png";

class AppTentang extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }
  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector("#searchElement").value;
  }

  render() {
    this.shadowDOM.innerHTML = `
          <style>
              * {
                  margin: 0;
                  padding: 0;
                  box-sizing: border-box;
              }
              :host {
                display: flex;
                flex-flow: row nowrap;
                padding: 10px;
                width: 80%;
                justify-content: center;
              }
              img {
                width: 250px;
                padding: 50px;
              }
              .hero{
                display: flex;
                align-items: center;
                width: 80%;
              }

              input[type=search] {
                width: 80%;
                box-sizing: border-box;
                border: 2px solid #ccc;
                border-radius: 4px;
                font-size: 16px;
                background-color: white;
                padding: 12px 20px 12px 40px;
              }

              button {
                width: 100px;
                cursor: pointer;
                margin-left: auto;
                padding: 13px;
                background-color: #337CCF;
                color: white;
                border: 0;
              }

              button:hover {
                background: #191D88;             
              }

              @media screen and (max-width: 550px){
                .hero {
                    flex-direction: column; 
                    justify-content: center;
                    width: 100%;
                }

                img {
                  width: 100%;
                }

                input[type=search] {
                  width: 60%;
                }
              }

              
          </style>

          <div class="hero">
            <img src="${logo}" alt="Ym" />

            <div id="tentang">
              <h1>Yubzz Movies</h1>
              <p>
                Selamat datang di Yubzz Movies, sumber terpercaya untuk daftar lengkap film
                dari berbagai genre, tahun, dan negara. Temukan ulasan terbaru,
                trailer eksklusif, dan informasi tentang film favorit Anda. Jelajahi
                dunia sinema dengan mudah dan cepat bersama kami!
              </p><br>
              <div id="search-container" class="search-container">
                <input placeholder="Search Movies" id="searchElement" type="search">
                <button id="searchButtonElement" type="submit">Search</button>
              </div>
            </div>
          </div>
          `;

      this.shadowDOM
      .querySelector("#searchButtonElement")
      .addEventListener("click", this._clickEvent);
  }
}

customElements.define("app-tentang", AppTentang);
