import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { blogList } from '../../config/data';
import Chip from '../../components/common/Chip';
import EmptyList from '../../components/common/EmptyList';
import { Link } from 'react-router-dom';

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, []);

  return (
    <>
      <Link className='text-gray-500 text-sm font-semibold mb-8 block no-underline' to='/'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {blog ? (
        <div className='max-w-[700px] mx-auto'>
          <header className='text-center'>
            <p className='text-gray-500 text-sm font-semibold'>Published {blog.createdAt}</p>
            <h1>{blog.title}</h1>
            <div className='flex justify-center'>
              {blog.subCategory.map((category, i) => (
                <div key={i} className='mx-4'>
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>
          <img className='w-full' src={blog.cover} alt='cover' />
          <p className='px-4 mt-6'>{blog.description}</p>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Blog;