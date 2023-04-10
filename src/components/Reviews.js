// інформація про огляди. Рендериться на сторінці MovieDetails
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

import { getReviewsInfo } from "services/services";

import { ReviewItem } from "./ReviewItem";

const Reviews = () => {
  const [reviews, setReviews] = useState();
  const { movieId } = useParams();
  
  useEffect(() => {
    getReviewsInfo(movieId)
      .then(data => {
        setReviews(data)
      });
  }, [movieId]);

  return (
    <>
    { reviews && reviews.length ? <ReviewItem reviews={reviews} /> : <p>There is no review.</p>}
    </>
    )
};

export default Reviews;