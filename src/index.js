const firstNames = require('./firstNames.json');
const lastNames = require('./lastNames.json');

const randomFullName = () => {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return firstName.concat(" ", lastName);
}

module.exports = { randomFullName };
