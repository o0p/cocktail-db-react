import React from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { setSearchTearm } = useGlobalContext();
  const searchValue = React.useRef('');
  return (
    <section className="section search">
      <form action="" className="search-form"></form>
    </section>
  );
};

export default SearchForm;
