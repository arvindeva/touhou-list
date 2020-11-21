import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

import urlFor from '../../../utils/urlFor';

const StyledCard = styled.div`
  border-radius: 0.5rem;
  cursor: pointer;
  text-align: center;
  overflow: hidden;
  width: 100%;
  max-width: 400px;
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
      width: 100%;
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
    <StyledCard>
      <Link href={'/games/[slug]'} as={`/games/${game.slug.current}`}>
        <a>
          <div className="image-wrapper">
            <figure
              style={{
                backgroundImage: `url(${game.imageMetadata.lqip})`,
                backgroundSize: `cover`,
                margin: 0,
              }}
            >
              <Image
                src={urlFor(game.imageUrl).width(400).height(400).url()}
                alt="game cover"
                width="350"
                height="350"
              />
            </figure>
          </div>
          <div className="content">
            <h3 className="title">{`Touhou ${game.number}: ${game.title}`}</h3>
          </div>
        </a>
      </Link>
    </StyledCard>
  );
};

export default Card;
