
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/agent-api/',
    component: ComponentCreator('/agent-api/','e3b'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','520'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post','6c7'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post','f06'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post','bee'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus','ddf'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook','ede'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello','4c2'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola','752'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome','bfa'),
    exact: true
  },
  {
    path: '/cloud-api/',
    component: ComponentCreator('/cloud-api/','59f'),
    exact: true
  },
  {
    path: '/core-api/',
    component: ComponentCreator('/core-api/','a3e'),
    exact: true
  },
  {
    path: '/device-api/',
    component: ComponentCreator('/device-api/','9f6'),
    exact: true
  },
  {
    path: '/docs/2.1.0/tags',
    component: ComponentCreator('/docs/2.1.0/tags','a68'),
    exact: true
  },
  {
    path: '/docs/next/tags',
    component: ComponentCreator('/docs/next/tags','a32'),
    exact: true
  },
  {
    path: '/docs/tags',
    component: ComponentCreator('/docs/tags','0cc'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/release-notes',
    component: ComponentCreator('/release-notes','b52'),
    exact: true
  },
  {
    path: '/taghub-api/',
    component: ComponentCreator('/taghub-api/','28c'),
    exact: true
  },
  {
    path: '/docs/2.1.0',
    component: ComponentCreator('/docs/2.1.0','d1b'),
    routes: [
      {
        path: '/docs/2.1.0/get-started/initial_configuration',
        component: ComponentCreator('/docs/2.1.0/get-started/initial_configuration','05a'),
        exact: true
      },
      {
        path: '/docs/2.1.0/get-started/installation',
        component: ComponentCreator('/docs/2.1.0/get-started/installation','49d'),
        exact: true
      },
      {
        path: '/docs/2.1.0/intro/what-is-TPE',
        component: ComponentCreator('/docs/2.1.0/intro/what-is-TPE','f9d'),
        exact: true,
        'sidebar': "version-2.1.0/docs"
      },
      {
        path: '/docs/2.1.0/intro/what-is-TPP',
        component: ComponentCreator('/docs/2.1.0/intro/what-is-TPP','c0c'),
        exact: true,
        'sidebar': "version-2.1.0/docs"
      }
    ]
  },
  {
    path: '/docs/next',
    component: ComponentCreator('/docs/next','b02'),
    routes: [
      {
        path: '/docs/next/get-started/initial_configuration',
        component: ComponentCreator('/docs/next/get-started/initial_configuration','d88'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/get-started/installation',
        component: ComponentCreator('/docs/next/get-started/installation','170'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/intro/what-is-TPE',
        component: ComponentCreator('/docs/next/intro/what-is-TPE','086'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/intro/what-is-TPP',
        component: ComponentCreator('/docs/next/intro/what-is-TPP','3a7'),
        exact: true,
        'sidebar': "docs"
      }
    ]
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','dd5'),
    routes: [
      {
        path: '/docs/get-started/initial_configuration',
        component: ComponentCreator('/docs/get-started/initial_configuration','1fa'),
        exact: true
      },
      {
        path: '/docs/get-started/installation',
        component: ComponentCreator('/docs/get-started/installation','1de'),
        exact: true
      },
      {
        path: '/docs/intro/what-is-TPE',
        component: ComponentCreator('/docs/intro/what-is-TPE','3da'),
        exact: true,
        'sidebar': "version-2.2.0/docs"
      },
      {
        path: '/docs/intro/what-is-TPP',
        component: ComponentCreator('/docs/intro/what-is-TPP','201'),
        exact: true,
        'sidebar': "version-2.2.0/docs"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
