import React, { Component } from 'react';
import './page.css';
import Header from '../header/header.js';
import Posts from '../posts/posts.js';
import Footer from '../footer/footer.js'



class Page extends Component {
  render() {
    return (
      <div>
        <Header />
        <Posts />
        <Footer />
      </div>
    );
  }
}

export default Page;
