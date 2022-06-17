const baseUrl = "https://api.scryfall.com";
//returns a random card Image
export function getRandomCardImage() {
  fetch(`${baseUrl}/cards/random`)
    .then((response) => {
      console.log(response.json().image_uris.art_crop);
    })
    .catch((error) => {
      throw error;
    });
}
export function getCardsByQuery({ cmc = -1, power = -1 }) {
  const queryUrlPart = `&q=${cmc >= 0 ? `cmc%3D${cmc}+` : ""}${
    power >= 0 ? `pow%3D${power}` : ""
  }`;
  console.log(`${baseUrl}/cards/search?order=color${queryUrlPart}`);
  const cards = fetch(`${baseUrl}/cards/search?order=color${queryUrlPart}`)
    .then((response) => {
      return handleResponse(response);
    })
    .catch((error) => {
      throw error;
    });
  return cards;
}
async function handleResponse(response) {
  if (response.ok) {
    const json = await response.json();
    return json.data;
  }
  if (response.status === 400) {
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error("Network response was not ok.");
}
