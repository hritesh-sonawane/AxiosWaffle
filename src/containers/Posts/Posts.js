import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import axios from '../../axios';
import './Posts.css';
// import { Link } from 'react-router-dom';

class Posts extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    console.log(this.props);

    axios.get('/posts')
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: 'Sasuke'
          }
        });
        this.setState({posts: updatedPosts});
      })
      .catch(error => {
        console.log(error);
        // this.setState({error: true});
      });
  }

  postSelectedHandler = id => {
    // this.setState({selectedPostId: id});
    // better ways programmatically
    this.props.history.push({pathname: '/' + id});
    // this.props.history.push('/' + id);
  }

  render() {

    let posts = <p style={{textAlign: 'center', color: 'red'}}>Something went wrong! Checkout console.</p>
    if(!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
                // <Link to={'/' + post.id} key={post.id}>
                  <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    {...this.props}
                    clicked={() => this.postSelectedHandler(post.id)} 
                 />
                 // </Link>
        );
      });
    }

    return (
      <section className="Posts">
        {posts}
      </section>
    );
  }
}

export default Posts;