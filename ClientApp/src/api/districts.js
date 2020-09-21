export default {
  get: async () => {
    const response = await fetch('/api/districts');
    return await response.json();
  }
}