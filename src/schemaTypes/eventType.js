export const eventType =[ {
    name: 'Project',
    type: 'document',
    fields: [
        {
            name: 'name',
            type: 'string',
        },
        {
            name: 'description',
            type: 'text',
        },
        {
            name: 'video',
            type: 'file',
        },
        {
            name: 'skills',
            type: 'array',
            of: [{type: 'string'}],
        },
        {
            name: 'link_read',
            type: 'string',
        },
        {
            name: 'link_link',
            type: 'string',
        },
        {
            name: 'link_code',
            type: 'string',
        },
    ],
}]