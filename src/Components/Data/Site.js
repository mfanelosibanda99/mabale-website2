export const site = {
  name: 'Mabale Primary School',
  tagline: 'Inspiring Young Minds. Building Bright Futures.',
  logo: '/logo.png', // replace with the real logo file later
  video: {
    src: '/video/promo.mp4', // when you have the real video, put it in public/video and write '/video/promo.mp4'
    poster: '/sec2-1.png', // shown while the video loads, and used as the placeholder now
  },
  // TODO: replace these placeholders with the school's real contact details
  contact: {
    phone: '+263 783 426 298',
    email: 'info@mabalepry.com',
    address: 'mk mabale box uncommonhub',
    hours: 'Mon – Fri: 8:00 AM – 4:00 PM',
  },
nav: [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Academics', to: '/academics' },
  { label: 'Activities', to: '/activities' },
  { label: 'Admissions', to: '/admissions' },
  { label: 'News', to: '/news' },
  { label: 'Contact', to: '/contact' },
],
}