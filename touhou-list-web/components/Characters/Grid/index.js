import styled from 'styled-components';

const StyledCharactersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 1rem;
`;

const CharactersGrid = ({ children }) => {
  return <StyledCharactersGrid>{children}</StyledCharactersGrid>;
};

export default CharactersGrid;
