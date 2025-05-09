import fetch from 'node-fetch';

export async function handler(event, context) {
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING", {
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
