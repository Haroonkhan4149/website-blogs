import React from 'react';
import BlogItem from './BlogItem';


const BlogList = ({ blogs }) => {
  return (
    <div className='grid grid-cols-3 gap-12 md:grid-cols-2 sm:grid-cols-1 blogList-wrap'>
      {blogs.map((blog) => (
        <BlogItem blog={blog} />
      ))}
    </div> 
  ); 
};

export default BlogList;
