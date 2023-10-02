/*
Where to use curly braces

You can only use curly braces in two ways inside JSX:
- As text directly inside a JSX tag: <h1>{name}'s To Do List</h1> works, but <{tag}>Gregorio Y. Zara's To Do List</{tag}> will not.
- As attributes immediately following the = sign: src={avatar} will read the avatar variable, but src="{avatar}" will pass the string "{avatar}".

*/

const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}

// Using “double curlies”: CSS and other objects in JSX 
export default function Hello() {
  return (
    <>
      {/* The next time you see {{ and }} in JSX, know that it’s nothing more than an object inside the JSX curlies! */}
      <p style={{ fontWeight: 'bolder' }}>Hello, Today is {formatDate(today)}</p>
    </>
  );
}