import styled from 'styled-components'

export const Title = styled.h1`
  color: var(--color-white-100);
  font-size: 6.4rem;

  & > span {
    color: var(--color-primary);
  }
`

export const JobTitle = styled.h2`
  color: var(--color-white-100);
  font-size: 2rem;
  margin-bottom: 4rem;
`

export const Description = styled.p`
  color: var(--color-white-100);
  font-size: 2rem;
  line-height: 3rem;
`

export const BioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20rem 0;
`
