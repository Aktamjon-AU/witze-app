const API_Jokes = "https://witzapi.de/api/joke";

export async function fetchedJokes() {
    const res = await fetch(API_Jokes);

    const data = await res.json();
    
    return data[0].text;
    
}