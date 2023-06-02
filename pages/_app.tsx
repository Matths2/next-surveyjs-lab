import '../styles/globals.css'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@material-tailwind/react'
import Layout from '../components/layout'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
