// This pattern denotes an interface for communicating between callings
// I.E [Mediated Objects].

const User = function(name){
    this.name = name;
    this.chatroom = null;
    console.log(this)
}

User.prototype = {
    send: function(msg, to){
        this.chatroom.send(msg, this, to)
    },
    recieve: function(msg, from){
        console.log(`${from.name} to ${this.name} : ${msg}`)
    }
}

const Chatroom = function(){
    let users = {};  //List of users

    return {
        register: function(user){
            users[user.name] = user;
            user.chatroom = this;
        },
        send: function(msg, from, to){
            // Check if the msg is to be broadcated
            if(!to){
                // multiple useer msg
                for(user in users){
                    if(users[user] !== from){
                        users[user].recieve(msg, from);
                    }
                }
            }else{
                // single user msg
                to.recieve(msg, from);
            }
        }
    }
}

// New Users
const Stanley = new User('Stanley');
const Cynthia = new User('Cynthia');
const paul = new User('paul');

// Register user to chatroom
const chatroom = new Chatroom;
chatroom.register(Stanley);
chatroom.register(Cynthia);
chatroom.register(paul);

// Send messages
Stanley.send('Hello babe', Cynthia);
Stanley.send('Hello bro', paul);
paul.send('i\'m good bro, you??', Stanley);
