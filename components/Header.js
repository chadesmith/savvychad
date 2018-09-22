

export default function Header(state){
    var title = state[state.active].title;
     return `	    return `
      <div id="header">	      <div id="header">
        <div class="container">	        <div class="container">
          <h1>${state.title}</h1>	          <h1>${title}</h1>
          <h3>Welcome, ${state.greeting}!</h3>
          <em>this should be italicized</em>	          <em>this should be italicized</em>
          <strong>this should be bold</strong>	          <strong>this should be bold</strong>
          <img src="https://avatars2.githubusercontent.com/u/9038489?s=400&u=29a74373a954d705b6bd58542c6b605c74f88426&v=4" alt="my face">	          <img src="https://avatars2.githubusercontent.com/u/9038489?s=400&u=29a74373a954d705b6bd58542c6b605c74f88426&v=4" alt="my face">
           <div id="greeting"></div>	           <div id="greeting"></div>
         </div>	         </div>
       </div>	       </div>
     `;	     `;
 }	 }