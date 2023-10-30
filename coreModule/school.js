const EventEmitter = require('events');

class  School extends EventEmitter
{
     startPeriod(){
        console.log("class has been started");
    
        //raise event after class finish
        setTimeout(()=>{
            this.emit('bellRingTwo', {
                period:'third',
                text:'period ended'
            });
        }, 3000)
        
    }

}

module.exports = School

