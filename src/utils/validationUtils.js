export const valdateListName = listName => {
  if (!listName) {
    return {
      isValid: false,
      error: 'List name can not be empty!',
    }
  } else if (listName.legth) {
    return {
      isValid: false,
      error: 'List name should be at least 3 charaters!',
    }
  }
  return {
    isValid: true,
    error: null,
  }
}
