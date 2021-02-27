import './../styles/global.css'

import { ChallangesContext } from '../contexts/ChallangesContext'

function MyApp({ Component, pageProps }) {
  return (
    <ChallangesContext.Provider value={'teste'}>
      <Component {...pageProps} />
    </ChallangesContext.Provider>
  )
}

export default MyApp