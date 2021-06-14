import logo from './logo.svg';
import './App.css';
// import Flash from './components/flashComponent'
//import Login from './components/signIn'
import newAcount from './components/newAcount'
import forgotPasword from './components/forgotPasword';
import Views from './components/views'
import Login from './components/Login';
import NewAcount from './components/newAcount';
// import Posts from './components/posts'
import Posts from './components/posts'
import RouterApp from './route'
import Menu from './component/navbar'
import Page1 from './component/page1'
import Page2 from './component/page2'
import Page3 from './component/page3'
import RApp from './component/routes';
import {
  BrowserRouter as Router, Route, Switch, useParams
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router> 
         {/* <Menu></Menu> */}
       
      <RApp></RApp>
        {/* <RouterApp></RouterApp> */}
        {/* <Posts></Posts> */}
        {/* <Login></Login>
        <NewAcount></NewAcount> */}
        {/* <Views></Views> */}
        {/* <Posts></Posts> */}
      </Router>
    </div>
  );
}

export default App;


