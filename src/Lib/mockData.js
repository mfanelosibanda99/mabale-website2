// DEMO ONLY. This is fake data for building the screens.
// Never keep real passwords or real pupil data in front-end code:
// real logins and data will come from the backend later.

export const users = [
  {
    id: 'u1',
    name: 'Mfae Admin',
    email: 'mfae@mabale.com',
    password: 'admin123',
    role: 'admin',
  },
  {
    id: 'u2',
    name: 'Teacher',
    email: 'teacher@mabale.com',
    password: 'teacher123',
    role: 'teacher',
    className: 'Grade 3',
  },
  {
    id: 'u3',
    name: 'Parent',
    email: 'parent@mabale.com',
    password: 'parent123',
    role: 'parent',
    childIds: ['s1', 's2'],
  },
]

export const students = [
  { id: 's1', name: 'Tendai Moyo', className: 'Grade 3', age: 8, parentId: 'u3', status: 'Active' },
  { id: 's2', name: 'Chipo Moyo', className: 'Grade 1', age: 6, parentId: 'u3', status: 'Active' },
  { id: 's3', name: 'Farai Dube', className: 'Grade 3', age: 9, parentId: 'u4', status: 'Active' },
  { id: 's4', name: 'Nomsa Sibanda', className: 'Grade 4', age: 10, parentId: 'u5', status: 'Active' },
  { id: 's5', name: 'Tatenda Khumalo', className: 'Grade 5', age: 11, parentId: 'u6', status: 'Active' },
  { id: 's6', name: 'Anesu Chuma', className: 'Grade 6', age: 12, parentId: 'u7', status: 'Active' },
  { id: 's7', name: 'Lindiwe Ncube', className: 'Grade 7', age: 13, parentId: 'u8', status: 'Active' },
  { id: 's8', name: 'Kuda Mlambo', className: 'Grade 2', age: 7, parentId: 'u9', status: 'Transferred' },
]

export const applications = [
  { id: 'a1', childName: 'Rudo Ncube', childAge: 6, parentName: 'Mrs Ncube', phone: '+000 000 000 001', status: 'Pending', date: '2026-11-01' },
  { id: 'a2', childName: 'Tafara Banda', childAge: 7, parentName: 'Mr Banda', phone: '+000 000 000 002', status: 'Approved', date: '2026-10-28' },
  { id: 'a3', childName: 'Melody Phiri', childAge: 5, parentName: 'Mrs Phiri', phone: '+000 000 000 003', status: 'Pending', date: '2026-11-03' },
]

export const announcements = [
  { id: 'n1', title: 'Admissions are open', date: '2026-11-01', text: 'Applications for the new school year are now open. Apply online or visit the school office.', audience: 'public' },
  { id: 'n2', title: 'Parents meeting', date: '2026-11-10', text: 'All parents are invited to the end of term meeting in the school hall.', audience: 'parents' },
  { id: 'n3', title: 'Sports day', date: '2026-11-15', text: 'Our annual sports day will take place on the main field. Everyone is welcome.', audience: 'public' },
]