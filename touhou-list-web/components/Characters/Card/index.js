import styled from 'styled-components';
import Link from 'next/link';
import urlFor from '../../../utils/urlFor';

const StyledCard = styled.div`
  border-radius: 0.5rem;
  cursor: pointer;
  text-align: center;
  overflow: hidden;
  &:hover {
    transform: translateY(-0.5rem);
    transition: transform 0.2s;
    .content {
      background-color: ${(props) => props.theme.colors.blue};
      transition: transform 0.2s, background-color 0.2s;
    }
  }
  .image-wrapper {
    img {
      border-radius: 0.5rem 0.5rem 0 0;
      width: 100%;
      transform: translateY(3px);
    }
    .placeholder {
      width: 400px;
    }
  }
  .content {
    padding: 2rem 1rem;
    background-color: ${(props) => props.theme.colors.darkBlue};
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
          <div className="image-wrapper">
            {character.image ? (
              <img
                src={urlFor(character.image).width(400).height(400).url()}
                alt="character cover"
              />
            ) : (
              <img
                src="/grey.png"
                className="placeholder"
                alt="character cover"
              />
            )}
          </div>
          <div className="content">{character.name} </div>
        </StyledCard>
      </a>
    </Link>
  );
};

export default Card;
