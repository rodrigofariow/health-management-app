import Meta from '../components/Meta/index'
import NavBar from '../components/NavBar/index'
import GlobalStyle from '../global-styles'

export default ({ children }) => (
  <div>
    <Meta />
    <NavBar />
    {children}

    <GlobalStyle />
  </div>
)
