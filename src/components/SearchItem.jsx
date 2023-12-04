import React from "react";
import { useParams } from "react-router-dom";

const SearchItem = () => {
  const { term } = useParams();
  return <div>SearchItem - {term}</div>;
};

export default SearchItem;
