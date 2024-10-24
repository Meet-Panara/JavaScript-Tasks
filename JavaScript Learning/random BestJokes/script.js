
const joke = document.getElementById('joke');
const jokeButton = document.getElementById("jokeBtn");

// const generateJokes = () => {

// // using .then and .catch
//     const setHeaders = {
//         headers: {
//             Accept : "application/json"
//         }
//     };

//     fetch('https://icanhazdadjoke.com', setHeaders)
//     .then((res) => res.json()) 
//     .then((data) => {
//         joke.innerHTML = data.joke;
//     }).catch((error) => console.log(error));
// }

//  now using async and await
    async function generateJokes() {
        const setHeaders = {
            headers: {
                Accept : "application/json"
            }
        };

        try{
            const res = await fetch('https://icanhazdadjoke.com', setHeaders);
            const jokesData = await res.json();
            joke.textContent = jokesData.joke;
        }catch(error){
            console.log(error);
        }
}

jokeButton.addEventListener('click', generateJokes);
generateJokes();