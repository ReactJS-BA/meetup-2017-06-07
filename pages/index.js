import React, { Component } from 'react';
import Waypoint from 'react-waypoint';
import axios from 'axios';

import Header from '../components/Header';
import MainWrapper from '../components/MainWrapper';

const POSTS_URL = 'http://api.taringa.net/post/trending/view';

export default class Home extends Component {
  static async getInitialProps () {
    const res = await axios.get(POSTS_URL);
    const posts = res.data;
    return { posts };
  }
  state = {
    posts: this.props.posts || [],
    page: 1,
  }

  loadMorePosts = async () => {
    const page = this.state.page + 1;
    const res = await axios.get(`${POSTS_URL}?page=${page}`);
    this.setState({
      posts: [...this.state.posts, ...res.data],
      page,
    });
  }

  renderPost = post =>
    <div className="post" key={post.id}>
      <img src={post.images[0].url} className="thumbnail" />
      <p><a href={post.canonical} target="_blank">{post.title}</a></p>
      <style jsx>{`
        .post {
          padding: 10px;
          background: white;
          border: 1px solid #e6e6e6;
          border-radius: 4px;
          margin: 8px 0;
        }
        .thumbnail {
          display: inline-block;
          width: 50px;
        }
        p {
          display: inline-block;
          vertical-align: top;
          margin: 0 10px;
          font-size: 22px;
        }
      `}</style>
    </div>

  render() {
    const { posts, loading } = this.state;
    return (
      <MainWrapper>
        {posts.length === 0 ?
          <p>Loading...</p> :
          posts.map(this.renderPost)
        }
        <Waypoint
          onEnter={this.loadMorePosts}
        />
      </MainWrapper>
    );
  }
}