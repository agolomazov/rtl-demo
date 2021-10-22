import React, { FC } from 'react';
import { IPost } from '../models/IPost';

interface PostItemProps {
  post: IPost;
}

export const PostItem: FC<PostItemProps> = ({ post }) => {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};
