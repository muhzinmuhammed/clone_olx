import React, { useEffect, useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import Post from './store/PostContext';
import { AuthContext, FirebaseContext } from './store/Context';

function App() {
  const { setUser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  }, [firebase, setUser]);

  return (
    <Post>
    <Router>
     
        <Route exact path="/" component={Home} />
        <Route  path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/create" component={Create} />
        <Route path="/view" component={View} />
     
    </Router>
    </Post>
  );
}
export default App;