

function Link(link){
    return `
    <li>
    <a href="/${link}">${link}</a>
    </li>
    `;
}

    
    export default function Navigation(state){
        var links = "";

    //console.log(state.links);

    for(let i = 0;i < state.links.length; i++){
     links = links + Link(state.link[i]);
    }

    return `
    <div id="navigation">
        <ul class="container">
            ${links}
        </ul>
    </div>
    `;
   }
     /* <div>

       <ul>
                <li>
                <a href= "./blog/">blog</a>
                </li>
                <li>
                <a href= "./contact/">contact info</a>
                </li>
                <li>
                <a href= "./projects/">projects</a> 
                </li>
                <li>
                <a href= "/">home</a> 
                </li> 
     </ul>
           
     </div> 
      `; 
 
    }
}