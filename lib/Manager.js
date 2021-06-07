// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const employee = require('./Employee.js')
class manager extends employee {
  constructor(name, id, email, officeNum) {
    super(name, id, email)
    this.officeNum = officeNum
  }
  getOfficeNum() { return this.officeNum }
  getRole() { return 'manager' }
}
module.exports = manager 