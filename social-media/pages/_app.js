import ThemeSwitcher from '../components/ThemeSwitcher';
import '../styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <div>
      <ThemeSwitcher />
      <Component {...pageProps} />
    </div>
  );
}

export default App;
