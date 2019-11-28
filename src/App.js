import React, {Component} from 'react';
import './App.css';
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import Home from './components/auths/home'
import SignIn from './components/auths/signIn'
import Navbar from './components/links/navbar'
import SignUp from './components/admin/signUp';
import CreateArticle from './components/articles/createArticle';
import CreateGif from './components/gifs/createGif';
import EditArticle from './components/articles/editArticle';
import ArticleWithComment from './components/articles/articleWithComment';
import Dashboard from './components/auths/dashboard';
import GifWithComment from './components/gifs/gifWithComment';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
      <div className="App">
          <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/signin' component={SignIn} />
          <Route path='/feed' component={Dashboard} />
          <Route exact path='/articles' component={CreateArticle} /> {/*create article form */}
          <Route path='/articles/:articleId/edit' component={EditArticle} /> {/*edit article form */}
          <Route path='/articles/:articleId' component={ArticleWithComment} /> {/*view article and its comment form */}
          <Route exact path='/gifs' component={CreateGif} />
          <Route path='/gifs/:gifId' component={GifWithComment} />
          <Route path='/signup' component={SignUp} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
  
}

export default App;
