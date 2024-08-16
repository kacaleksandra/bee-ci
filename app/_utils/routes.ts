export const routes = {
  LANDING: '/',
  DASHBOARD: '/dashboard',
  MY_REPOSITORIES: '/my-repositories',
  DOCUMENTATION: '/docs',

  documentationRoutes: [
    {
      title: 'Getting Started',
      href: 'getting-started',
      items: [
        { title: 'Introduction', href: '/introduction' },
        { title: 'Installation', href: '/installation' },
        { title: 'Project Structure', href: '/project-structure' },
      ],
    },
    {
      title: 'React Hooks',
      href: 'react-hooks',
      items: [{ title: 'useRouter', href: '/use-router' }],
    },
  ],
};

export const documentationRoutes = routes.documentationRoutes
  .map(({ href, items }) =>
    items.map((link) => ({
      title: link.title,
      href: `${routes.DOCUMENTATION}/${href}${link.href}`,
    })),
  )
  .flat();