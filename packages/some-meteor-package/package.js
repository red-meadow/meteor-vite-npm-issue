Package.describe({
  name: 'some:meteor-package',
})

Package.onUse(function (api) {
  api.use(['ecmascript'])
  api.mainModule('./client.js', 'client')
})
