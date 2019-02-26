import axios from 'axios';

async function getResult(query) {
    const key = '4c5e5648f7ee1bf5dd0434d9869df0d9';
    try {
        const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${query}`);
        const recipes = res.data.recipes;
        console.log(recipes);
    } catch (error) {
        alert(error);
    }
}

getResult('rice bean');