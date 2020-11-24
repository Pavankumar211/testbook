import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import LoginPage from './components/LoginForm';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <LoginPage />
    </div>
  );
}

const NotFoundPage = () => (
  <h2>Error not found</h2>
)

// const App = (
//   <BrowserRouter>
//     <Switch>
//       <Route path="/" component={Header}/>
//       <Route path="/login" component={LoginPage} />
//       <Route component={NotFoundPage} />
//     </Switch>
//   </BrowserRouter>
// )

export default App;
