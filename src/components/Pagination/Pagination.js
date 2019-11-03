import React from 'react';
import propTypes from 'prop-types';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import getThemeColor from '../../utils/getThemeColor';

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
      {!isFirstPage && (
        <AniLink
          cover
          direction="left"
          bg={getThemeColor()}
          duration={0.5}
          to={prevPage}
        >
          Página Anterior
        </AniLink>
      )}
      <p>
        {currentPage} de {numPages}
      </p>
      {!isLastPage && (
        <AniLink
          cover
          direction="right"
          bg={getThemeColor()}
          duration={0.5}
          to={nextPage}
        >
          Próxima Página
        </AniLink>
      )}
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
