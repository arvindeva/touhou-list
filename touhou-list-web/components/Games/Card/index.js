import styled from 'styled-components';
import Link from 'next/link';

import urlFor from '../../../utils/urlFor';

const StyledCard = styled.div`
  background-color: ${(props) => props.theme.colors.darkBlue};
  padding: 1rem;
  padding-bottom: 2rem;
  min-width: 200px;
  border-radius: 0.5rem;
  cursor: pointer;
  text-align: center;
  transition: transform 0.05s, background-color 0.05s;
  &:hover {
    transform: scale(1.033) translateY(-0.5rem);
    transition: transform 0.05s, background-color 0.05s;
    background-color: ${(props) => props.theme.colors.blue};
  }
  .image-wrapper {
    margin-bottom: 2rem;
    img {
      width: 100%;
      border-radius: 0.5rem;
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
              src={urlFor(game.imageUrl).width(350).height(350).url()}
              alt="game cover"
            />
          </div>
          <div className="content">{`Touhou ${game.number}: ${game.title}`}</div>
        </StyledCard>
      </a>
    </Link>
  );
};

export default Card;
