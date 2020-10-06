import styled from 'styled-components';

const StyledSection = styled.section`
  margin-bottom: 2rem;
`;

const Section = ({ children }) => {
  return <StyledSection>{children}</StyledSection>;
};

export default Section;
