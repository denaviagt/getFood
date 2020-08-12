class FoodItem extends HTMLElement {
   set food(food) {
      this._food = food;
      this.render();
   }

   render() {
      this.innerHTML += `
                  <style>
                     .card-decked {
                        margin-top: 20px;
                     }

                     .card-food {
                        margin: 15px 0;
                     }

                     .card-food a {
                        text-decoration: none;
                        color: black;
                     }

                     .card-food a:hover {
                        transform: scale(1.05);
                     }

                     .card-food .card-title {
                        text-align: center;
                     }

                     .card-footer small img {
                        height: 13px;
                        margin: 0 4px;
                     }
                  </style>
                  <div class="col card-food" id="${this._food.idMeal}">
                        <div class="card h-100">
                           <a href="#">
                              <img src="${this._food.strMealThumb}" class="card-img-top" alt="icon${this._food.strMealThumb}">
                              <div class="card-body">
                              <h6 class="card-title">${this._food.strMeal}</h6>
                              </div>
                           </a>
                        </div>
                  </div>`;
   }

}

customElements.define("food-item", FoodItem);