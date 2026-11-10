import { users, students, applications, announcements } from './mockData'

// Pretend to wait for a server, so the screens behave like they will with a real backend
const delay = (ms = 400) => new Promise((resolve) => setTimeout(resolve, ms))

const withoutPassword = (user) => {
  const safe = { ...user }
  delete safe.password
  return safe
}

export async function login(email, password) {
  await delay()
  const found = users.find(
    (user) =>
      user.email.toLowerCase() === email.trim().toLowerCase() &&
      user.password === password
  )
  if (!found) throw new Error('Wrong email or password.')
  return withoutPassword(found)
}

export async function getStudents() {
  await delay()
  return [...students]
}

export async function getApplications() {
  await delay()
  return [...applications]
}

export async function getAnnouncements({ publicOnly = false } = {}) {
  await delay()
  return announcements.filter((item) => !publicOnly || item.audience === 'public')
}

// New applications are kept in memory only, so they disappear when the page is refreshed
export async function submitApplication(data) {
  await delay()
  const application = {
    id: `a${applications.length + 1}`,
    status: 'Pending',
    date: new Date().toISOString().slice(0, 10),
    ...data,
  }
  applications.push(application)
  return application
}
export async function updateApplicationStatus(id, status) {
  await delay()
  const application = applications.find((item) => item.id === id)
  if (!application) throw new Error('Application not found.')
  application.status = status
  return { ...application }
}

export async function addAnnouncement(data) {
  await delay()
  const announcement = {
    id: `n${announcements.length + 1}`,
    date: new Date().toISOString().slice(0, 10),
    ...data,
  }
  announcements.unshift(announcement)
  return announcement
}

// Demo only: the message is not saved or sent anywhere yet
export async function sendMessage(data) {
  await delay()
  return { ...data, id: `m${Date.now()}` }
}