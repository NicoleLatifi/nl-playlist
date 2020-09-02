const baseUrl = "http://localhost:8080";

export const getAllSongs = () => {
  return fetch(`${baseUrl}/api/v1/playlist`)
  .then(response => {
    if(response.ok) {
      return response.json();
    }
  })
}
