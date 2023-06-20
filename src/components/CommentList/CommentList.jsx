import { List, Block, Initials, Name, Text, Button } from './CommentList.styled';

export function CommentList(props) {
  const { comments, onDelete } = props;

  return (
    <ul>
      {comments.map(({ user: { username }, body, id }) => {
        return (
          <List key={id}>
            <Block>
              <Initials>{username.slice(0, 2)}</Initials>
              <Name>{username}</Name>
            </Block>
            <Text>{body}</Text>
            <Button onClick={() => onDelete(id)}>X</Button>
          </List>
        );
      })}
    </ul>
  );
}
