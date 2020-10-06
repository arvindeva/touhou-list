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
      width: 500px;
    }
  }
  .content {
    padding: 2rem 1rem;
    background-color: ${(props) => props.theme.colors.darkBlue};
    display: flex;
    align-items: center;
    height: 8rem;
    .title {
      margin: 0 auto;
    }
  }
`;

const Card = ({ game }) => {
  return (
    <Link href={'/games/[slug]'} as={`/games/${game.slug.current}`}>
      <a>
        <StyledCard>
          <div className="image-wrapper">
            <img
              src={urlFor(game.imageUrl).width(400).height(400).url()}
              alt="game cover"
            />
          </div>
          <div className="content">
            <h3 className="title">{`Touhou ${game.number}: ${game.title}`}</h3>
          </div>
        </StyledCard>
      </a>
    </Link>
  );
};

export default Card;
