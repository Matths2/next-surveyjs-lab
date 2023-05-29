import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProps } from 'next/app';
import { SSRProvider } from 'react-bootstrap';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <SSRProvider>
      <Component {...pageProps} />;
    </SSRProvider>
  );
};

export default MyApp;
