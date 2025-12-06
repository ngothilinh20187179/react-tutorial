import { useParams, useSearchParams } from 'react-router-dom';

const PostDetail = () => {
  const { postId } = useParams(); 
  const [searchParams] = useSearchParams();
  const view = searchParams.get('view');
  const sort = searchParams.get('sort');

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px' }}>
      <h3>Detail Post</h3>
      <p>ID - URL Parameter: <strong>{postId}</strong></p>
      <p><strong>View:</strong> {view || 'default'}</p>
      <p><strong>Sort By:</strong> {sort || 'none'}</p>
    </div>
  );
};
export default PostDetail;