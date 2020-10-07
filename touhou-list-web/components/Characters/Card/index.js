import styled from 'styled-components';
import Link from 'next/link';
import urlFor from '../../../utils/urlFor';

const StyledCard = styled.div`
  border-radius: 0.5rem;
  cursor: pointer;
  text-align: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
  &:hover {
    .content {
      background-color: ${(props) => props.theme.colors.blue};
      transition: background-color 0.2s;
    }
  }
  .image-wrapper {
    img {
      border-radius: 0.5rem 0.5rem 0 0;
      object-fit: cover;
      width: 100%;
      height: 350px;
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
    <StyledCard>
      <Link
        href={'/characters/[slug]'}
        as={`/characters/${character.slug.current}`}
      >
        <a>
          <div className="image-wrapper">
            {character.image ? (
              <img
                src={urlFor(character.image)
                  .auto('format')
                  .size(350, 350)
                  .url()}
                alt={character.name}
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
        </a>
      </Link>
    </StyledCard>
  );
};

export default Card;
