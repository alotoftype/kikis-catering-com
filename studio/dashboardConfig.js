export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f8f99fcaa5439390f4f7552',
                  title: 'Sanity Studio',
                  name: 'kikis-catering-com-studio',
                  apiId: '9d32b1b5-d4ab-4152-8df0-e2a99181c626'
                },
                {
                  buildHookId: '5f8f99fcca7daf37782155a8',
                  title: 'Blog Website',
                  name: 'kikis-catering-com',
                  apiId: '20c83ef5-d794-4b72-abdf-a366cfcaf186'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alotoftype/kikis-catering-com',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://kikis-catering-com.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
