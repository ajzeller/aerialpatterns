export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5e9921eb55949bad4e0653af',
                  title: 'Sanity Studio',
                  name: 'aerialpatterns-studio',
                  apiId: '43619326-f5c0-462d-a6d9-7b242a21d712'
                },
                {
                  buildHookId: '5e9921eb5b299c6a21aad734',
                  title: 'Portfolio Website',
                  name: 'aerialpatterns',
                  apiId: '4de3a71b-3470-4cf1-8073-1c14691af3fd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ajzeller/aerialpatterns',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://aerialpatterns.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
