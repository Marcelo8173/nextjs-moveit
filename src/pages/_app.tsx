import '../styles/global.css';

import { ChangelleProvider } from '../context/changelleContext';

function MyApp({ Component, pageProps }) {
  return (
    <ChangelleProvider>
      <Component {...pageProps} />
    </ChangelleProvider>
   )
}

export default MyApp
