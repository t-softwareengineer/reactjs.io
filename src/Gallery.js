import logo from './logo.svg';

// NOTE: A file can only have one default export, but it can have numerous named exports!

// My First Component
export function LogoReact() {
  return (<img src={logo} alt="Logo" />);
}

export default function Gallery() {
  return (
    <>
      <div>
        <h1>React.js Logo's</h1>
        <LogoReact />
        <LogoReact />
        <LogoReact />
      </div>
    </>
  );
}