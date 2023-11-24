//(function() {
	
let tmpl = document.createElement('template');	
tmpl.innerHTML = `
<style>      
      .chartCard {
        width: 200;
        height: 200;  
	background: #1A1A1A;
      }
      .chartBox {
        width: 200px;

      }
    </style>
<div class="chartCard">
      <div class="chartBox" id="chartBox">
        <canvas id="Tachometer" class="Tachometer" is="chart-tachometer"></canvas>
      </div>
    </div>
`;

class Tachometer extends HTMLElement {	
constructor() {
	super();			
	this.style.height = "100%";
	this.style.display = "block";
	this._shadowRoot = this.attachShadow({mode: "open"});
	this._shadowRoot.innerHTML = "<h1>Hello Shadow DOM</h1>";
	//this._shadowRoot.getElementById("Tachometer");
	this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
	//this._firstConnection = false;
	//this.render();		
	} 

   };

	customElements.define("chart-tachometer",Tachometer); 
//})();
