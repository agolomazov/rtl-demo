import React, { useEffect, useState } from 'react';
import { postAPI } from '../services/PostService';
import { PostItem } from './PostItem';

export const PostContainer = () => {
  const [limit, setLimit] = useState(10);
  const {
    data: posts,
    isLoading,
    refetch,
    isFetching,
  } = postAPI.useFetchAllPostsQuery(limit, {
    pollingInterval: 3000,
  });

  useEffect(() => {
    // setTimeout(() => {
    //   setLimit(5);
    // }, 3000);
  }, []);

  return (
    <div>
      <div className="post__list">
        <button onClick={refetch}>Refetch</button>
        {isFetching && <p>Обновление списка...</p>}
        {isLoading && <p>Загрузка постов...</p>}
        {!isLoading &&
          posts &&
          posts.map((post) => <PostItem key={post.id} post={post} />)}
      </div>
    </div>
  );
};
