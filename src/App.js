import logo from './logo.svg';
import './App.scss';

// My First Component
function LogoReact() {
  return (<img src={logo} alt="Logo" />);
}

function App() {
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

export default App;
