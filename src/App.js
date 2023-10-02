import './App.scss';

/*
SYNTAX  | EXPORT STATEMENT	                  | IMPORT STATEMENT
Default	| export default function Button() {}	| import Button from './Button.js';
Named	  | export function Button() {}	        | import { Button } from './Button.js';

When you write a default import, you can put any name you want after import. 
For example, you could write import Banana from './Button.js' instead 
and it would still provide you with the same default export. In contrast, 
with named imports, the name has to match on both sides. That’s why 
they are called named imports!
*/

import Gallery from './Gallery';
import { LogoReact } from './Gallery';
import Hello from './Date';
import Avatar from './Person';

function App() {
  return (
    <>
      {/* Displays 3 React Logo's */}
      <Gallery />
      {/* Displays 1 React Logo */}
      <LogoReact />
      {/* Displays Hello, (Day) */}
      <Hello />
      {/* person object name */}
      <Avatar />
    </>
  );
}

export default App;
