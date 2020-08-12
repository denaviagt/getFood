class FootBar extends HTMLElement {

   connectedCallback() {
      this.render();
   }

   render() {
      this.innerHTML = `
            <style>
               .footer {
                  color: rgb(184, 184, 184);
                  font-size: 14px;
                  text-align: center;
               }
            </style>
            <nav class="navbar footer bg-dark justify-content-center">
               Copyright &copy;2020 - Anggita Denavia
            </nav>
      `;
   }
}

customElements.define('foot-bar', FootBar);