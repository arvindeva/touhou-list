import styled from 'styled-components';
import Link from 'next/link';

const StyledCard = styled.div`
  background-color: ${(props) => props.theme.colors.darkBlue};
  padding: 2rem 1rem;
  min-width: 200px;
  border-radius: 0.5rem;
  cursor: pointer;
  text-align: center;
  &:hover {
    transform: scale(1.05);
    transition: transform 0.05s, background-color 0.5s;
    background-color: ${(props) => props.theme.colors.accent};
    .image {
      border: 1px solid ${(props) => props.theme.colors.darkBlue};
    }
  }
  .image {
    width: 130px;
    height: 130px;
    background-color: grey;
    margin: 0 auto;
    margin-bottom: 2rem;
    border-radius: 50%;
    border: 1px solid ${(props) => props.theme.colors.accent};
  }
  .content {
  }
`;

const Card = ({ character }) => {
  return (
    <Link
      href={'/characters/[slug]'}
      as={`/characters/${character.slug.current}`}
    >
      <a>
        <StyledCard>
          <div className="image"></div>
          <div className="content">{character.name} </div>
        </StyledCard>
      </a>
    </Link>
  );
};

export default Card;
