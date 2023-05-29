import React, { useContext } from 'react';
import PropTyes from 'prop-types';
import LocaleContext from '../contexts/LocaleContexts';

function SearchNote({ onSearch }) {
  const { locale } = useContext(LocaleContext);

  return (
    <section className="search-bar">
      <input
        type="text"
        placeholder={locale === 'id' ? 'Cari berdasarkan nama' : 'Search by name'}
        onChange={(e) => onSearch(e.target.value)}
      />
    </section>
  );
}

SearchNote.propTypes = {
  onSearch: PropTyes.func.isRequired,
};

export default SearchNote;
