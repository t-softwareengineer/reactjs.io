/*
More fun with JavaScript objects and curly braces
You can move several expressions into one object, and reference them in your JSX inside curly braces:
*/
const person = {
  name: 'Mr. Robot',
  theme: {
    backgroundColor: 'black',
    color: 'white'
  }
};

export default function Avatar() {
  return (
    <>
      <div style={personalbar.theme}>
        <p>{person.name}</p>
      </div>
    </>
  );
}