
import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.send('testing');
});
app.get('/api/data',async (req,res) => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",{
        headers: {
                'User-Agent': 'Mozilla/5.0', // Required by some APIs to mimic a browser
                'Accept': 'application/json'
            }
        }
       ); 
    const json = await data.json();
    res.json(json);
})
app.get('/api/restaurant',async(req,res) => {
    const id = req.query.id;
    // console.log(id)
    const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=${id}`,{
        headers: {
                'User-Agent': 'Mozilla/5.0', // Required by some APIs to mimic a browser
                'Accept': 'application/json'
            }
        }
       ); 
    const json = await data.json();
    res.json(json);
})


app.listen(3001, () => console.log('Server running on port 3001'));
