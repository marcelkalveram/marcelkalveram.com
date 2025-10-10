export function formatDate(dateString, includeYear = true) {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: includeYear ? 'numeric' : undefined,
    timeZone: 'UTC',
  })
}
