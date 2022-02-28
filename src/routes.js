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
        link: '/admin/registration',
        icon: 'fas fa-newspaper',
      },
      {
        title: 'Re-Registration',
        link: '/admin/modification',
        icon: 'fas fa-user-circle',
      },
      {
        title: 'MFS Registration',
        link: '/admin/mfs-registration',
        icon: 'fas fa-user-circle',
      },
    ],
  },
  // {
  //   title: 'Passport',
  //   data: [
  //     {
  //       title: 'Registration',
  //       link: '/admin/passport/registration',
  //       icon: 'fas fa-newspaper',
  //     },
  //     {
  //       title: 'Re-Registration',
  //       link: '/admin/passport/modification',
  //       icon: 'fas fa-user-circle',
  //     },
  //   ],
  // },
];

export default routes;
