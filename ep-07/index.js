// github
// fetch/axios
const githubAPI = "https://api.github.com/users/Surendrakumarpatel";

const fetchData = async () => {
    try {
        const res = await fetch(githubAPI);
        const jsonData = await res.json();
        console.log(jsonData.bio);
    } catch (error) {
        console.log(error);
    } finally{
        console.log("ye hmesha chlega...");
        
    }

}

fetchData();

// // named export
// export const name = "developers";

// // default export
// export default name;