export async function logout() {
  try {
    const res = await fetch('https://spiral-project.vercel.app/api/auth/logout/')
    window.location.href = '/'
  } catch {
    console.log('failed to log out', err)
  }
}