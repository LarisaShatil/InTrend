import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getMovieByQuery } from "services/services";
import { Box, Container, Input } from "@chakra-ui/react";

import { MovieList } from "./MovieList";

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
      <Container as='section' maxWidth='4xl' borderRadius='lg' p='4'>
        <form onSubmit={onSubmit}>
          <Box display='flex' m='0 auto' width='50%' alignItems='center'>
            <Input onChange={onChange}
              mr='1rem'
              type='text'
              value={query}
              autoComplete='off' />
            <button type='submit'>
              Search
            </button>
          </Box>
        </form>
      </Container>

      {searchMovieList.length > 0 && <MovieList movies={searchMovieList} />}
    </>
  );
}