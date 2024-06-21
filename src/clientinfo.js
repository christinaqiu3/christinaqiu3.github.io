import { client } from './client.js';

async function getData() {
    const query = `*[_type == "project"] {
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
