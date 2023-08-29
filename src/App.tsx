import './styles.css'
import react_logo from './react.png'
import boat from './boat.svg'
import ClickCounter from './ClickCounter'

export const App = () => {
  const name = 'Ihor'

  return (
    <>
      <img src={react_logo} alt="react" />
      <img src={boat} alt="boat" width={300} />
      <h1>
        Weather app build on top of custom Webpack - {process.env.NODE_ENV} -{' '}
        {process.env.name}
      </h1>
      <ClickCounter />
    </>
  )
}
