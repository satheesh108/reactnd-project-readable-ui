//Post
export const NEW_POST = 'NEW_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'
export const VOTE_POST = 'VOTE_POST'

export function createNewPost({id, time, title, body, author, category}){
  return(
    type:NEW_POST,
    id,
    time,
    title,
    body,
    author,
    category
  )
}

export function editPost({id, time, title, body, author, category}){
  return(
    type:NEW_POST,
    id,
    time,
    title,
    body,
    author,
    category
  )
}

export function editPost({id}){
  return(
    type:DELETE_POST,
    id
  )
}

export function votePost({id,vote}){
  return(
    type:VOTE_POST,
    id,
    vote //up-dow or +1--1
  )
}
