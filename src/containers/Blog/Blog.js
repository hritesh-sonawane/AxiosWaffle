import React, { Component } from 'react';
import './Blog.css';
// import axios from '../../axios';
import Posts from '../Posts/Posts';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import NewPost from '../NewPost/NewPost';
import FullPost from '../FullPost/FullPost';

class Blog extends Component {
  render () {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><NavLink 
                to="/"   // styling root path is tricky :(
                exact
                activeClassName="my-active"
                activeStyle={{
                  textDecoration: 'underline',
                  color: 'orange'
                }}>Posts</NavLink></li>
              <li><NavLink to={{
                pathname: '/new-post',
                hash: '#submit',
                search: '?quick-submit=true'
              }}>New Post</NavLink></li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <h1>Home</h1>} />
        <Route path="/" render={() => <h1>221B</h1>} /> */}
        <Route path="/" exact component={Posts} />
        <Redirect from="posts" to="/" />
        {/* to load 1 Route at a time */}
        <Switch>
          <Route path="/new-post" component={NewPost} />
          <Route path="/:id" exact component={FullPost} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
