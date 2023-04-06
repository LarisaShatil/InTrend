import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastInfo } from 'services/services';
import styled from 'styled-components';

import Avatar from '../images/avatar-default.svg';

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const PhotoItem = styled.img`
  padding-top: 30px;
  width: 200px;
  height: 90%;
`;

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getCastInfo(movieId).then(data => {
      setCast(data);
    });
  }, [movieId]);

  if (!cast) {
    return null;
  }
  console.log('cast', cast);
  return (
    <>
      <List>
        {cast.map(actor => (
          <li key={actor.id}>
            <PhotoItem
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                  : Avatar
              }
              alt={actor.name}
            ></PhotoItem>
            <h4>{actor.name}</h4>
            <p>"{actor.character}"</p>
          </li>
        ))}
      </List>
    </>
  );
};

export default Cast;
