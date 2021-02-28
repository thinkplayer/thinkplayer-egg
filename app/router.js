module.exports = app => {
  const {router, controller} = app
  router.post('/user/login', controller.user.login)
  router.get('/signIn', controller.user.signIn)
}