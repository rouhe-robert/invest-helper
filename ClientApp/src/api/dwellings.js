export default {
  post: dwelling => fetch(
    '/api/dwellings',
    {
      body: JSON.stringify(dwelling),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'post'
    }
  )
}