export default defineEventHandler( async (event) => {

  await new Promise(r => setTimeout(r, 2000))

  return {
    id: 1,
    name: 'Joan'
  }
})
