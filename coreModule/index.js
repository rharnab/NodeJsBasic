const School = require('./school');
const User = require('./user');

const school = new School();

school.on('bellRingTwo', ({period, text})=>{
    console.log(`Yeah we go to home because ${period} ${text}`)
});

school.startPeriod();

const user = new User();

user.on('UserCreate', ({name, email, dept}) =>{
    console.log(`user data found ${name} , ${email} , ${dept}`);
});

user.userInfo();
