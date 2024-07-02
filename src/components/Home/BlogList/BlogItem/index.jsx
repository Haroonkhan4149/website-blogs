import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '../../../common/Chip';


const BlogItem = ({
  blog : {
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
    id,
  }
}) => {
  return (
    <div className="flex flex-col blogItem-wrap">
      <img className='w-full h-60 object-cover rounded-2xl mb-2' src={cover} alt='cover' />
      <Chip label={category} />
      <h3 className='mt-2 mb-4 flex-1'>{title}</h3>
      <p className='relative max-h-12 overflow-hidden pr-2 text-sm text-gray-500 blogItem-desc'>{description}</p>
      <footer className='flex items-center justify-between mt-4'>
        <div className='flex items-center blogItem-author'>
          <img className='w-10 h-10 rounded-full object-cover mr-2' src={authorAvatar} alt='avatar' />
          <div>
            <h6 className='text-xs text-gray-500 font-bold'>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
        <Link className='text-gray-500 hover:text-gray-500 blogItem-link' to={`/blog/${id}`}>
          ➝
        </Link>
      </footer>
    </div>
  );
};

export default BlogItem;
