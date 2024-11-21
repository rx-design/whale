export default defineEventHandler(async () => {
  return await runTask('prices:update')
})
