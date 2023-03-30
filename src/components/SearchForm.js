import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getMovieByQuery } from "services/services";
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

// if the input is empty => return
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
      <form onSubmit={onSubmit}>
      <input
        onChange={onChange}
        type="text"
        value={query}
        autoComplete='off'
      />
      <button type="submit">
        Search
      </button>
      </form>
      {searchMovieList.length > 0 && <MovieList movies={ searchMovieList} />}
    </>
  );
}