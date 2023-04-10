import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastInfo } from 'services/services';

import SliderBox from './Slider';

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

  return (
      <SliderBox data={cast} />
  );
};

export default Cast;
