import sanity from '../lib/sanity';
import { nameToSlug, slugToName } from '../utils/slug';

const GET_CHARACTERS = `*[_type == 'character']{ 
  _id, name, 
  appearance[]->{title}
} 
`;

const GET_CHARACTER_BY_NAME = `*[_type == 'character' && name == $name]{ 
  _id, name, 
  appearance[]->{_id, title}
} 
`;

export async function getAllCharacterSlugs() {
  const characters = await sanity.fetch(GET_CHARACTERS);
  const slugs = characters.map((character) => {
    return nameToSlug(character.name);
  });
  // Returns an array of objects consisting id params:
  // [{ params: { slug: ''} }, { params: { slug: ''} }]
  const paramsArray = slugs.map((slug) => {
    return {
      params: {
        slug: slug,
      },
    };
  });
  return paramsArray;
}

export async function getSortedCharactersWithSlugs() {
  const characters = await sanity.fetch(GET_CHARACTERS);

  const sortedCharacters = characters
    .slice()
    .sort((a, b) => (a.name > b.name ? 1 : -1));

  const sortedCharactersWithSlug = sortedCharacters.map((character) => {
    return {
      ...character,
      slug: nameToSlug(character.name),
    };
  });
  return sortedCharactersWithSlug;
}

export async function getCharacterData(slug) {
  const name = slugToName(slug);
  const character = await sanity.fetch(GET_CHARACTER_BY_NAME, { name: name });
  return character[0];
}
