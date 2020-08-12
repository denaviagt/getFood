class SearchBar extends HTMLElement {
   connectedCallback() {
      this.render();
   }

   set clickEvent(event) {
      this._clickEvent = event;
      this.render();
   }

   get value() {
      return this.querySelector("#searchInput").value;
   }

   render() {
      this.innerHTML = `
         <style>
            .form-search {
               display: flex;
               justify-content: center;
               margin: 30px 0;
            }

            .form-search form {
               display: flex;
            }

            .form-search input {
               height: 40px;
               width: 300px;
               border: 0;
               display: block;
               font-size: 18px;
               cursor: pointer;
               border-radius: 30px;
            }

            .form-search .btn {
               border-radius: 30px;
               background-color: rgb(175, 135, 86);
               color: #ffff;
            }

            .form-search .btn:hover {
               background-color: rgba(179, 136, 55, 0.74);
            }
         </style>

         <div class="form-search">
            <form class="my-2 my-lg-0">
               <input id="searchInput" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
               <button id="searchButton" class="btn my-sm-0" type="submit">Search</button>
            </form>
         </div>`;

      this.querySelector("#searchButton").addEventListener("click", this._clickEvent);

   }
}

customElements.define("search-bar", SearchBar);