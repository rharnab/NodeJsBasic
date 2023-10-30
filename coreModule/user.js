const EventEmitter = require('events');

class User extends EventEmitter {
    userInfo(){
        console.log("user create success ");
        //raise event 
        this.emit('UserCreate', {
            name:"ramjan",
            email:"ramjan@bu.com",
            dept:"CSE"
        });
    }
}
module.exports = User;