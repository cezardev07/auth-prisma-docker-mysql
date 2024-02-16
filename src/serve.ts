import AppController from "./app";

const appController = new AppController()
const port = process.env.PORT || 3333

appController.app.listen(port, () => {
  return console.log(`serve is running port: ${port}`)
})
