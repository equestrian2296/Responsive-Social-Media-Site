import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.css';

function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      router.push("/");
    } else {
      router.push("/login");
    }

    setLoading(false);
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center h-screen text-lg">Loading...</div>;
  }

  return <Component {...pageProps} />;
}

export default App;
