export default {
  get: async id => {
    const response = typeof id === 'undefined' ?
      await fetch('/api/dwellings') :
      await fetch('/api/dwellings/' + id);
    
      return await response.json();
  },
  post: async dwelling => {
    const response = await fetch(
      '/api/dwellings',
      {
        body: JSON.stringify(dwelling),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'post'
      }
    );

    return await response.json();
  }
}