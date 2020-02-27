const db = require('./server/db/database')
const {User} = require('./server/db/userModel')


const seed = async () => {
    await db.sync({force: true})

    await User.create({
      email: 'email@gmail.com',  
      password: '888',
      imageURL: 'https://i.pinimg.com/originals/e0/3d/5b/e03d5b812b2734826f76960eca5b5541.jpg'
    })

    await User.create({
      email: 'bato@gmail.com',
      password: '123',
      imageURL: 'https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/panda_16x9.jpg?itok=6sXuQvIz'
    })
}

module.exports = seed

if (require.main === module) {
  seed()
    .then(() => {
      console.log('Seeding success!')
      db.close()
    })
}


