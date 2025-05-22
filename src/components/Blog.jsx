import React from 'react';
import './styles/Blog.css';
import plantrip4 from '../images/plantrip4.jpg';
import plantrip5 from '../images/plantrip5.jpg';
import plantrip6 from '../images/plantrip6.jpg';

const blogData = [
  {
    img: plantrip4,
    title: 'Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog',
    description: 'Lorem ipsum dolor sit amet consectetur. Bibendum dolor felis tempor facilisi placerat arcu quis.',
  },
  {
    img: plantrip5,
    title: 'Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog',
    description: 'Lorem ipsum dolor sit amet consectetur. Turpis consectetur risus etiam vitae ullamcorper.',
  },
  {
    img: plantrip6,
    title: 'Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog',
    description: 'Lorem ipsum dolor sit amet consectetur. Velit et nibh cursus nunc faucibus condimentum.',
  }
];

const Blog = () => {
  return (
    <div className="blog-section">
      <div className="blog-header">
        <h2>Blogs</h2>
        <p>Lorem ipsum dolor sit amet consectetur. Habitant venenatis eget adipiscing neque urna dui.</p>
        <button className="browse-btn">Browse All Blogs</button>
      </div>

      <div className="blog-list">
        {blogData.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.img} alt="blog" className="blog-image" />
            <div className="blog-content">
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
              <a href="#" className="read-link">Read Blog</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
