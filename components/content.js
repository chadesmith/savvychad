

import * as Pages from './Pages';

export default function Content(state){
    const page = state[state.active];

    console.log(Pages[page.body]);
    
    return `
          <div id="content">
            <div class="container">
              ${Pages[page.body](state)}
            </div>
          </div>
        `;
}
