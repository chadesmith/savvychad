
import {
    capitalize,
    kebabCase
} from 'lodash';


function Repo(repo){
    var name = kebabCase(repo.name)
        .split('-')
        .map(capitalize)
        .join(' ');

    return `
    <li>
      <a href="${repo.html_url}">${name}</a>
    </li>
  `;
}

export default function Home(state){
    // debugger;
    var repos = state
        .repos
        .map(Repo)
        .join('');

    return `
    <ol id="repos">
      ${repos}
      </ol>
      <p class="emphasized">American drummer Chad Smith began playing at 12, and by 14 was
       performing professionally. In 1985, he began working with indy metal band "Heaven’s 
       Flame", moving to MCA artist "Mary Burns" in 87, metal blade artist "Anacrusis" in 
       90, indy rock band "London Calling" in 93, Sony artist "Pavlov's Dog" in 94, and in 
       97 joined Geezer Butler's G/Z/R replacing Deen Castronovo, who had moved on to Ozzy 
       Osbourne’s band and later, Journey. 
         Chad’s playing is a combination of influences ranging from John Bonham, Tommy 
         Aldridge, Clyde Stubblefield and Steve Gadd. </p>
   
    <ul>
      <li>
      <a  href="https://www.metal-archives.com/artists/Chad_Smith/25180">
      encyclopia metallum page
      </a>
      </li>
      <li>
        <a href="https://github.com/savvychad">
          GitHub profile
        </a>
      </li>
      <li class="whipped">
        <a href="mailto:chadrums@gmail.com">
          Send me an email
        </a>
      </li>
      <li>
        <a class="emphasized" href="https://twitter.com/chadesmith">
          @tbd
        </a>
      </li>
    </ul>
    <ol>
      <li class="emphasized">First</li>
      <li>Second</li>
      <li>Third</li>
    </ol>
    
`;
}