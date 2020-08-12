class NavCustom extends HTMLElement {

   connectedCallback() {
      this.render();
   }

   render() {
      this.innerHTML = `
         <style>
            .navbar-brand {
               color: white !important;
               font-family: "Viga", sans-serif;
               font-size: 24px;
               margin-right: 40px;
               font-weight: 50;
            }

            .navbar-brand span {
               font-weight: 700;
            }

            .nav-link {
               color: white !important;
               margin: auto;
               text-transform: uppercase;
               width: 145px;
               text-align: center;
            }

            .nav-item:hover {
               color: #ffff;
               background-color: rgba(22, 22, 22, 0.753);
            }

            .dropdown .dropbtn {
               border: none;
               outline: none;
               background: none;
            }

            .dropdown .dropbtn i {
               margin: 0 5px;
            }

            .dropdown-content {
               display: none;
               position: absolute;
               max-height: 580px;
               box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
               z-index: 1;
            }

            .dropdown-content a {
               float: none;
               color: white;
               background-color: rgba(22, 22, 22, 0.753);
               padding: 12px 16px;
               text-decoration: none;
               display: block;
            }

            .dropdown-content a:hover {
               background-color: rgba(54, 52, 52, 0.602);
            }

            .dropdown:hover .dropbtn i {
               transform: rotate(180deg);
            }

            .dropdown:hover .dropdown-content {
               display: flex;
               flex-direction: column;
               flex-wrap: wrap;
            }
         </style>

         <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container">
               <a class="navbar-brand" href="index.html"><span>get</span>Foods</a>
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
               </button>

               <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav ml-auto">
                     <li class="nav-item active">
                        <a class="nav-link" href="#">Recipe</a>
                     </li>
                     <li class="nav-item dropdown">
                        <button class="nav-link  dropbtn" href="#">Category<i class="fa fa-caret-down"></i></button>
                        <div id="CategoryDropdown" class="dropdown-content">
                        </div>
                     </li>
                     </li>
                     <li class="nav-item dropdown">
                        <button class="nav-link dropbtn" href="#">Area<i class="fa fa-caret-down"></i></button>
                        <div id="AreaDropdown" class="dropdown-content">
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>`;

   }
}

customElements.define("nav-custom", NavCustom);