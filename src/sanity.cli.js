import {defineCliConfig} from 'sanity/cli'
import imageUrlBuilder from '@sanity/image-url';

export default defineCliConfig({
  api: {
    projectId: 'ac80qgh3',
    dataset: 'production'
  }
})
