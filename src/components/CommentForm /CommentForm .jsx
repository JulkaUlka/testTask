import { useState, useEffect } from 'react';
import { Button, Input, Form, Textarea } from './CommentForm.styled';
import storage from 'helpers/storage';

const COMMENT = 'comment-text';

export function CommentForm({ onSubmit }) {
  const [username, setUsername] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    const savedCommentText = storage.load(COMMENT);
    if (savedCommentText) {
      setBody(savedCommentText);
    }
  }, []);

  const inputChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'username':
        setUsername(value);
        break;
      case 'body':
        setBody(value);
        break;
      default:
        break;
    }
  };

  const resetForm = () => {
    setUsername('');
    setBody('');
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ user: { username }, body });
    console.log({ user: { username }, body });
    resetForm();
    storage.remove(COMMENT);
  };

  const handleTextareaChange = event => {
    const { value } = event.target;
    setBody(value);
    storage.save(COMMENT, value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="enter your name"
        onChange={inputChange}
        value={username}
        type="text"
        name="username"
        required
      />

      <Textarea
        placeholder="enter your comment"
        onChange={handleTextareaChange}
        value={body}
        name="body"
        required
      />

      <Button type="submit">Send</Button>
    </Form>
  );
}
