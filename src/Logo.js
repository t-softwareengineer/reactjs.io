// Passing strings with quotes 
import logo from './logo.svg';

// NOTE: dynamically specify the src or alt text
export default function Logo() {
  const reactLogo = {logo};
  const description = 'React Logo'
  return (
    <>
      <img src={reactLogo} alt={description} />
    </>
  );
}