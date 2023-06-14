import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Box, Container, Input, Image } from "@chakra-ui/react";

import { getMovieByQuery } from "services/services";
import { MovieList } from "./MovieList";
import Arrow from '../images/left-arrow.svg';
import Find from '../images/find.svg';

export default function SearchForm() {
  const [query, setQuery] = useState('');
  const [searchMovieList, setSearchMovieList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const onChange = e => {
    setQuery(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    if (!query.trim()) {
      return null;
    }

    setSearchParams({ query: query });
  };

  useEffect(() => {
    if (!searchParams.get('query')) {
      return;
    }
    getMovieByQuery(searchParams.get('query')).then(data => {
      setSearchMovieList(data);
    });
  }, [searchParams, query]);


  return (
    <>
      <Container as='section' maxWidth='4xl' borderRadius='lg' p={['1', '4']}>
        <form onSubmit={onSubmit}>
          <Box display='flex' m='0 auto'
            width={['80%', '70%', '60%', '50%',]}
            alignItems='center' >
            <Input onChange={onChange}
              mr='0.5rem'
              type='text'
              value={query}
              autoComplete='off' />
            <button type='submit'>
              <Image src={Find} width='2rem' />
            </button>
          </Box>
        </form>
      </Container>

      {searchMovieList.length > 0 && <MovieList movies={searchMovieList} />}
    </>
  );
}