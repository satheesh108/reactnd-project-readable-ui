const api = 'http://localhost:3001'
const token = 'blablabla'

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const getCategories = () =>
fetch (`${api}/categories`,{headers})
.then(res => res.json())
.then(data => data.categories)
