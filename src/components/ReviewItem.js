import styled from "styled-components"

const List = styled.ul`
list-style: '🖊  ' outside none;
`;

export const ReviewItem = ({ reviews }) => {

  return (
    <List>
      {reviews.map(review =>
        <li key={review.id}>
          <h4>{review.author}:</h4>
          <p>"{review.content}"</p>
        </li>
      )}
    </List>
  )
}