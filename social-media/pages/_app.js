import '../styles/globals.css'; // Import global styles
import '../components/NavBar.css'; // Import NavBar styles
import '../components/NavbarOption.css'; // Import NavbarOption styles
import '../components/Options.css'; // Import Options styles

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
