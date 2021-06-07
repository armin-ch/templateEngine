// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const employee = require('./Employee.js')
class engineer extends employee {
  constructor(name, id, email, github){
    super(name, id, email)
    this.github=github
  }
  getGithub() {return this.github}
  getRole() {return 'engineer'}
}
let eng1=new engineer('Armin', '123', 'armin@gmail.com', 'armin-ch')
console.log(eng1.getRole())