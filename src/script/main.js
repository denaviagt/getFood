import "./component/search-bar.js";
import "./component/food-list.js";
import "./component/foot-bar";

const base_url = "https://www.themealdb.com/api/json/v1/1/";
// ---------------------Category----------------------------

const getCategory = () => {
   const xhr = new XMLHttpRequest();

   xhr.onload = () => {
      try {
         const responseJson = JSON.parse(xhr.responseText);
         hasilCat(responseJson.meals);
      } catch (e) {
         console.warn("Error!" + e);
      }
   };
   xhr.onerror = () => {
      showResponseMessage();
   };
   xhr.open("GET", `${base_url}list.php?c=list`);
   xhr.send();
}

const hasilCat = (meals) => {
   const listCategoriElement = document.querySelector("#list-categori");
   const CategoryDropdown = document.querySelector("#CategoryDropdown");
   meals.forEach((categori) => {

      let CategoryId = categori.strCategory;
      listCategoriElement.innerHTML += `
            <li class="panel-category">
               <a class="linkCategori" id="${CategoryId}" onclick="" href="#">${CategoryId}</a>
            </li>
            <div class="vr"></div>`;
      CategoryDropdown.innerHTML += `<a class="linkCategori" id="${CategoryId}" href="#">${CategoryId}</a>`;
   });

   let linkCategories = document.querySelectorAll(".linkCategori");
   linkCategories.forEach(linkCategori => {
      linkCategori.addEventListener("click", event => {

         const CategoryId = event.target.id;
         getFood(CategoryId, "c");
      })

   })

};

// ------------------------Area------------------------

const getArea = () => {
   const xhr = new XMLHttpRequest();

   xhr.onload = () => {
      try {
         const responseJson = JSON.parse(xhr.responseText);
         hasilArea(responseJson.meals);
      } catch (e) {
         console.warn("Error!" + e);
      }
   };
   xhr.onerror = () => {
      showResponseMessage();
   };
   xhr.open("GET", `${base_url}list.php?a=list`);
   xhr.send();
}

const hasilArea = (meals) => {
   const AreaDropdown = document.querySelector("#AreaDropdown");
   meals.forEach((food) => {
      AreaDropdown.innerHTML += `<a class="linkArea" id="${food.strArea}" href="#">${food.strArea}</a>`;

      let linkAreas = document.querySelectorAll(".linkArea");
      linkAreas.forEach(linkArea => {
         linkArea.addEventListener("click", event => {
            event.preventDefault()
            const AreaId = event.target.id;
            getFood(AreaId, "a");
         })

      })
   });
};

// -----------------------------------Default------------------------------

const getDefault = () => {

   const xhr = new XMLHttpRequest();

   xhr.onload = () => {
      try {
         const responseJson = JSON.parse(xhr.responseText);
         hasilDefault(responseJson.meals);
      } catch (e) {
         console.warn("Error!" + e);
      }
   };
   xhr.onerror = () => {
      showResponseMessage();
   };
   xhr.open(
      "GET",
      `${base_url}random.php`
   );
   xhr.send();
}

const Default = document.querySelector(".default");
const hasilDefault = (meals) => {
   meals.forEach((food) => {
      let strYoutube = food.strYoutube.replace('watch?v=', 'embed/');
      Default.innerHTML += `
            <h6 class="text-center text-muted">Free Recipe</h6>
            <h3 class="card-title">${food.strMeal}</h3>
            <div class="card-body">
               <iframe class="card-img-top youtubeFrame" src="${strYoutube}" allowfullscreen></iframe>
               <p class="card-text d-flex justify-content-around">
                  <small class="text-muted first">${food.strCategory}</small>
                  <small class="text-muted second">${food.strArea}</small>
               </p>
               <p class="card-text">${food.strInstructions}</p>
            </div>`;


   });
};
// ------------------------------getFood---------------------------------------
function getFood(CategoryId, type = "c") {

   const xhr = new XMLHttpRequest();

   xhr.onload = () => {
      try {
         const responseJson = JSON.parse(xhr.responseText);
         hasilFood(responseJson.meals);
      } catch (e) {
         console.warn("Error!" + e);
      }
   };
   xhr.onerror = () => {
      showResponseMessage();
   };
   xhr.open(
      "GET",
      `${base_url}filter.php?${type}=${CategoryId}`
   );
   xhr.send();
}

const listFoodElement = document.querySelector("food-list");
const hasilFood = (meals) => {
   Default.remove();
   listFoodElement.foods = meals;

};

// -------------------------------Searching-----------------------------------
class DataSouce {
   static searchFood(keyword) {
      return fetch(`${base_url}search.php?s=${keyword}`)
         .then(response => response.json())
         .then(responseJson => {
            if (responseJson.meals) {
               return Promise.resolve(responseJson.meals);
            }
            return Promise.reject(`${keyword} is not found`);

         })
   }
}

const searchElement = document.querySelector("search-bar");

const onButtonSearchClicked = async () => {
   try {
      event.preventDefault();
      const result = await DataSouce.searchFood(searchElement.value);
      Default.remove()
      hasilFood(result);
   } catch (message) {
      Default.remove()
      fallbackResult(message);
   }
};

const fallbackResult = (message) => {
   listFoodElement.renderError(message);
};
searchElement.clickEvent = onButtonSearchClicked;

// ---------------------------ShowResponseMessage-----------------------------
const showResponseMessage = (message = "Check your internet connection") => {
   alert(message);
};

// ------------------------------DOMContentLoaded------------------------------
document.addEventListener("DOMContentLoaded", () => {
   getCategory();
   getArea();
   getDefault();
});