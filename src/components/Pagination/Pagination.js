import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'gatsby';

import * as S from './styled';

const Pagination = ({
  isFirstPage,
  isLastPage,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => {
  return (
    <S.PaginationWrapper>
      {!isFirstPage && <Link to={prevPage}>Página Anterior</Link>}
      <p>
        {currentPage} de {numPages}
      </p>
      {!isLastPage && <Link to={nextPage}>Próxima Página</Link>}
    </S.PaginationWrapper>
  );
};

Pagination.propTypes = {
  isFirstPage: propTypes.bool.isRequired,
  isLastPage: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
};

export default Pagination;
