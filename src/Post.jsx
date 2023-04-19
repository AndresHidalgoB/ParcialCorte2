import {useApi} from './customHooks/useApi'

export const Post = () => {
  const [posts, isLoading, error] = useApi("https://jsonplaceholder.typicode.com/photos");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="grid-container">
      {posts.map((post) => (
        <div key={post.id} className="card">
          <h2 className='title'>{post.title}</h2>
          <img src={post.thumbnailUrl} alt={post.title} />
        </div>
      ))}
    </div>
  );
};

