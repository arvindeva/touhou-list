export function nameToSlug(string) {
  return string
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
}

export function slugToName(slug) {
  let words = slug.split('-');
  return words
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
    })
    .join(' ');
}
