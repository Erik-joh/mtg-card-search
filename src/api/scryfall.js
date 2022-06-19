const baseUrl = "https://api.scryfall.com";
//returns a random card Image
export function getRandomCardImageUrl() {
  const imageUrl = fetch(`${baseUrl}/cards/random`)
    .then((response) => {
      return handleResponse(response);
    })
    .then((json) => {
      return json.image_uris.art_crop;
    })
    .catch((error) => {
      throw error;
    });
  return imageUrl;
}
export function getCardsByQuery({
  cardType,
  cmc,
  description,
  power,
  toughness,
}) {
  const fieldsArray = [];
  if (cardType !== "") fieldsArray.push(`t%3A${cardType}`);
  if (cmc !== "") fieldsArray.push(`cmc%3D${cmc}`);
  if (description !== "")
    fieldsArray.push(`o%3A${description.replace(" ", "%20")}`);
  if (power !== "") fieldsArray.push(`pow%3D${power}`);
  if (toughness !== "") fieldsArray.push(`tou%3D${toughness}`);

  const queryUrlPart = fieldsArray.join("+");

  const cards = fetch(`${baseUrl}/cards/search?q=${queryUrlPart}`)
    .then((response) => {
      return handleResponse(response);
    })
    .then((json) => {
      return json.data;
    })
    .catch((error) => {
      throw error;
    });
  return cards;
}
async function handleResponse(response) {
  if (response.ok) {
    const json = await response.json();
    return json;
  }
  if (response.status === 400) {
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error("Network response was not ok.");
}
