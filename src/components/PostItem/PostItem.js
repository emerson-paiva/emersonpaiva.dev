import React from 'react';
import PropTypes from 'prop-types';

import getThemeColor from '../../utils/getThemeColor';

import * as S from './styled';

const PostItem = ({ slug, tags, date, timeToRead, title, description }) => (
  <S.PostItemLink
    cover
    direction="right"
    bg={getThemeColor()}
    duration={0.5}
    to={slug}
  >
    <S.PostItemWrapper>
      <S.PostItemInfo>
        <S.PostItemDate>
          {date} - {timeToRead} min de leitura
        </S.PostItemDate>
        <S.PostItemTitle>{title}</S.PostItemTitle>
        <S.PostItemDescription>{description}</S.PostItemDescription>
        <S.PostItemTags>
          <S.TagIcon />
          {tags.map((tag, index) => (
            <S.PostItemTag key={index}>
              {tag}
              {index !== tags.length - 1 && ', '}
            </S.PostItemTag>
          ))}
        </S.PostItemTags>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
);

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PostItem;
