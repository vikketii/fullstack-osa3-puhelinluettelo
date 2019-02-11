const mongoose = require('mongoose')

if ( process.argv.length<3 ) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://fullstack:${password}@cluster0-trhzk.mongodb.net/puhelinluettelo-app?retryWrites=true`

mongoose.connect(url, { useNewUrlParser: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

if ( process.argv.length === 5) {
  const nameToAdd = process.argv[3]
  const numberToAdd = process.argv[4]

  const person = new Person({
    name: nameToAdd,
    number: numberToAdd,
  })

  person.save().then(response => {
    console.log(`lisätään ${nameToAdd} numero ${numberToAdd} luetteloon`)
    mongoose.connection.close()
  })

} else {
  console.log('puhelinluettelo:')
  Person.find({}).then(result => {
    result.forEach(person => {
      console.log(`${person.name} ${person.number}`)
    })
    mongoose.connection.close()
  })
}
