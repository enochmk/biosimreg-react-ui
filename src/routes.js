const routes = [
  {
    title: 'Admin Section',
    data: [
      {
        title: 'Dashboard',
        link: '/admin/dashboard',
        icon: 'fas fa-tv',
      },
    ],
  },
  {
    title: 'National ID',
    data: [
      {
        title: 'Registration',
        link: '/admin/register',
        icon: 'fa-solid fa-user-plus',
      },
      {
        title: 'Basic Linking',
        link: '/admin/linking',
        icon: 'fa-solid fa-rotate',
      },
      {
        title: 'MFS Registration',
        link: '/admin/register-mfs',
        icon: 'fas fa-money-check',
      },
    ],
  },
  {
    title: 'Tools',
    data: [
      {
        title: 'Subscriber`s Status',
        link: '/admin/subscriber-status',
        icon: 'fa-solid fa-info',
      },
      // {
      //   title: 'Validate National ID',
      //   link: '/admin/validate-national-id',
      //   icon: 'fa-solid fa-list',
      // },
    ],
  },
];

export default routes;
