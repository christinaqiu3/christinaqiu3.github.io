import { client } from './client.js';
import imageUrlBuilder from '@sanity/image-url';

async function getData() {
    const query = `*[_type == "Project"] {
    name, description, "videoUrl": video.asset->url, skills, link_read, link_link, link_code, rich_text
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
//     link_code,
//     rich_text,
// }`);
// // Function to fetch data
// export async function clientinfo() {
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log(data);
// }
