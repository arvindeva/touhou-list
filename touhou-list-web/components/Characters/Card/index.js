import styled from 'styled-components';
import Link from 'next/link';

const StyledCharacterCard = styled.div`
  background-color: ${(props) => props.theme.colors.darkBlue};
  padding: 1rem;
  max-width: 300px;
  border-radius: 0.5rem;
  cursor: pointer;
  text-align: center;
  &:hover {
    transform: scale(1.05);
    transition: transform 0.05s, background-color 0.5s;
    background-color: ${(props) => props.theme.colors.accent};
  }
`;

const CharacterCard = ({ character }) => {
  return (
    <Link
      href={'/characters/[slug]'}
      as={`/characters/${character.slug.current}`}
    >
      <StyledCharacterCard>{character.name}</StyledCharacterCard>
    </Link>
  );
};

export default CharacterCard;
