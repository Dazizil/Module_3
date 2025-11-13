//Jokes you've been 'awaiting' for ... promise
async function sayJoke(apiUrl, jokeId) {
    let response = await fetch(apiUrl);
    let data = await response.json();

    if (!data.jokes) {
        throw new Error(`No jokes at url: ${apiUrl}`);
    }

    let joke = data.jokes.find(j => j.id === jokeId);

    if (!joke) {
        throw new Error(`No jokes found id: ${jokeId}`)
    }

    return {
        saySetup() {
            return joke.setup;
        },
        sayPunchLine() {
            return joke.punchLine;
        }
    };
}
