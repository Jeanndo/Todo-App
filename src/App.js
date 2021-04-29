import '../src/styles/ui.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import  {BrowserRouter,Route,Switch} from 'react-router-dom';
import Login from '../src/Components/Authentication/Login';
import Logout from '../src/Components/Authentication/Logout';
import Home from '../src/Components/Dashboard/dashboard';
import NavigationBar from '../src/Components/Layouts/NavigationBar';
import SignUp from '../src/Components/Authentication/SignUp';
function App() {
  return (
    <BrowserRouter>
    {/* <div className='Todo-container'>
    //  <Navigation/>
    //  <TaskBody/>
    //  <BottomNavigation/>
    //   </div> */}
    <NavigationBar/>
    <Switch>
    <Route path="/login" component={Login}/>
    <Route path="/logout" component={Logout}/>
    <Route path='/signup' component={SignUp}/>
    <Route path="/" component ={Home}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
