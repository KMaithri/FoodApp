import fetch from 'node-fetch';

export async function handler(event, context) {
  const id = event.queryStringParameters.id;

  const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=${id}`, {
    headers: {
      'User-Agent': 'Mozilla/5.0',
      'Accept': 'application/json'
    }
  });

  const json = await data.json();
  return {
    statusCode: 200,
    body: JSON.stringify(json)
  };
}
