import { Outlet, useParams } from "react-router-dom";

import SearchForm from "components/SearchForm";

export const Movies = () => {
  const { movieId } = useParams();

  return (
    <>
      {movieId ? <></> : <SearchForm/>}
      <Outlet/>
    </>
  )
};