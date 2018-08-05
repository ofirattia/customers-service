var faker = require('faker')

function generateCustomers () {
  var customers = []

  for (var id = 0; id < 60; id++) {
    var firstName = faker.name.firstName()
    var lastName = faker.name.firstName()
    var phoneNumber = faker.phone.phoneNumberFormat()
    var jobTitle = faker.name.jobTitle();
    var email = faker.internet.email();
    customers.push({
      "id": id,
      "first_name": firstName,
      "last_name": lastName,
      "phone": phoneNumber,
      "job": jobTitle,
      "email":email,
      "card":faker.helpers.createCard()
    })
  }

  return { "customers": customers }
} 
 
// json-server requires that you export
// a function which generates the data set
module.exports = generateCustomers
