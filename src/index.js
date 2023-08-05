import React from 'react';
import ReactDOM from 'react-dom';

import {FirebaseContext} from './store/Context'
import firebase from './Firebase/config';

import Context from './store/Context'



ReactDOM.render(
<FirebaseContext.Provider value={{firebase}}>
  
    <Context />
    </FirebaseContext.Provider>, document.getElementById('root'));