import React, { useEffect } from 'react';
import './App.css';
import { fetchUsers } from './store/reducers/ActionCreators';
import { useAppDispatch, useAppSelector } from './store/hooks/redux';
import { PostContainer } from './components/PostContainer';

function App() {
  const dispatch = useAppDispatch();
  const { users, isLoading, error } = useAppSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
    console.log('mount App component');
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Test Application</h1>
      {isLoading && <p>Loading...</p>}
      {!isLoading && error && <p>{error}</p>}
      {!isLoading &&
        users.map((user) => (
          <p key={user.id}>
            {user.name} <a href={`mailto:${user.email}`}>{user.email}</a>
          </p>
        ))}
      <PostContainer />
    </div>
  );
}

export default App;
