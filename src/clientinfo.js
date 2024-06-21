import { client } from './client.js';

async function getData() {
    const query = `*[_type == "Project"] {
    name, description, video, skills, link_read, link_link, link_code
}`

    return await client.fetch(query)
}

export async function clientinfo() {

    const projects = await getData()
    return{
        projects
    };
}

//
// const query = encodeURIComponent(`*[_type == "Project"] {
//     name,
//     description,
//     video,
//     skills,
//     link_read,
//     link_link,
//     link_code
// }`);
// const url = `https://ac80qgh3.apicdn.sanity.io/v1/data/query/production?query=${query}`;
//
// // Function to fetch data
// export async function clientinfo() {
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log(data);
// }
