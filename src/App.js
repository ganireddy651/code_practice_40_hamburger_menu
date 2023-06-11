import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'
import PopUp from './components/PopUp'

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/popup" component={PopUp} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
