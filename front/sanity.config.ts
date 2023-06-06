
import { deskTool } from 'sanity/desk';
import {defineConfig} from 'sanity'
import { schemaTypes } from './schemas';

const config = defineConfig({
    name: 'default',
    title: 'template_test',
    projectId: 'cvjuutjf',
    dataset: 'production',
    // basePath:"/admin",
    apiVersion:"2023-06-06",
    plugins: [deskTool()],
    schema: {
      types: schemaTypes,
    },
})


export default config