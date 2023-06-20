import { useState, useEffect } from 'react';
import { CommentForm } from './CommentForm /CommentForm ';
import { CommentList } from './CommentList/CommentList';
import storage from 'helpers/storage';
import { nanoid } from 'nanoid';
import { initialComments } from 'helpers/comments';
import { Title, Container } from './App.styled';

const COMMENTS = initialComments;

export function App() {
  const [comments, setComments] = useState(
    () => storage.load('comments-list') ?? COMMENTS
  );

  useEffect(() => {
    storage.save('comments-list', comments);
  }, [comments]);

  const addComment = comment => {
    setComments(prevState => [...prevState, { ...comment, id: nanoid() }]);
  };

  const deleteComment = id => {
    setComments(prevState => prevState.filter(comment => comment.id !== id));
  };

  return (
    <>
      <Container>
        <Title>Comments</Title>
        {comments.length > 0 && (
          <CommentList comments={comments} onDelete={deleteComment} />
        )}
        <CommentForm onSubmit={addComment} />
      </Container>
    </>
  );
}
