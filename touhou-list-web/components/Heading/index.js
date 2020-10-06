import styled from 'styled-components';

const StyledHeading = styled.h1`
  margin-bottom: 1rem;
`;

const Heading = ({ children }) => {
  return <StyledHeading>{children}</StyledHeading>;
};

export default Heading;
