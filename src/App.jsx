import { useRoutes } from 'react-router-dom'
import { routes } from './routes/AppRoute'
const App = () => {
  const droute = useRoutes(routes)

  
  return droute
}

export default App
