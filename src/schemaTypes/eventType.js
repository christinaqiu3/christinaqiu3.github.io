export const eventType = {
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
        {
            name: 'rich_text',
            type: 'array',
            of: [
                {
                    type: 'block',
                    marks: {
                        decorators: [
                            { title: 'Strong', value: 'strong' },
                            { title: 'Emphasis', value: 'em' },
                            { title: 'Code', value: 'code' },
                            { title: 'Highlight', value: 'highlight' }
                        ]
                    },
                    styles: [
                        {title: 'Normal', value: 'normal'},
                        {title: 'Title', value: 'title'},
                        {title: 'H1', value: 'h1'},
                        {title: 'H2', value: 'h2'},
                        {title: 'H3', value: 'h3'},
                        {title: 'Quote', value: 'blockquote'},
                    ],
                },
                {type: 'image'}
            ],
        },
    ],
}