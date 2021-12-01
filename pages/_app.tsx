import Wrapper from "../components/Wrapper"
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  )
}

export default MyApp
