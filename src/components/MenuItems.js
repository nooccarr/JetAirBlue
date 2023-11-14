export const menuItems = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Plane Tours',
    url: '/plane-tours',
    submenu: [
      {
        title: 'Manhattan Plane Tour',
        url: '/manhattan-plane-tour',
      },
      {
        title: 'Montauk Plane Tour',
        url: '/montauk-plane-tour',
      }
    ]
  },
  {
    title: 'More',
    submenu: [
      {
        title: 'About Us',
        url: '/about-us',
      },
      {
        title: 'Contact Us',
        url: '/contact-us',
      },
      {
        title: 'Gallery',
        url: '/gallery',
      },
      {
        title: 'FAQ',
        url: '/faq',
      },
    ]
  },
];