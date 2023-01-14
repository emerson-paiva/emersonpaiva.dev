import styled from 'styled-components'

export const Title = styled.h1`
  color: var(--color-text);
  font-size: 6.2rem;

  & > span {
    color: var(--color-primary);
  }
`

export const JobTitle = styled.h2`
  color: var(--color-text);
  font-size: 2rem;
  margin-bottom: 4rem;
`

export const Description = styled.p`
  color: var(--color-text);
  font-size: 2rem;
  line-height: 3rem;
`

export const BioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: calc(15%) 0;
  width: 100%;
`
