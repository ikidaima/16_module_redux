export function addComment(comment) {
  return {
    type: 'ADD_COMMENT',
    payload: comment
  }
}

export function deleteComment(id) {
  return {
    type: 'DELETE_COMMENT',
    payload: id
  }
}