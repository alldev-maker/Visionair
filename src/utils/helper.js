export const getTagName = (tags, currentItem) =>
  tags.filter(tag => tag.prismicId === currentItem.tag.id)[0].data.name
