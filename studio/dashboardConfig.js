export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '60491945f6a15f1bee550d24',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-rumwoepb',
                  apiId: '2b7ada64-7c87-4952-a96f-8d01fcd9b4dd'
                },
                {
                  buildHookId: '604919458c543b1fbe99c1c0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-z25z1mxq',
                  apiId: '32638db0-7c73-496b-bdf1-298fb91ef19e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jagare/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-z25z1mxq.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
