import styled from 'styled-components';

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 1.5rem;
`;

const Grid = ({ children }) => {
  return <StyledGrid>{children}</StyledGrid>;
};

export default Grid;