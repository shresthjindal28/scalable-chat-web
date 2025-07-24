import {Server} from 'socket.io';
import Redis from 'ioredis';


const pub = new Redis({
    host: process.env.host,
    port: process.env.port ? parseInt(process.env.port) : undefined,
    username: process.env.username,
    password: process.env.password
});
const sub = new Redis({
    host: process.env.host,
    port: process.env.port ? parseInt(process.env.port) : undefined,
    username: process.env.username,
    password: process.env.password
});

class SocketService {
    private _io: Server;
    constructor(){
        console.log("init Socket Server");
        
        this._io = new Server({
            cors:{
                allowedHeaders:["*"],
                origin:'*'
            }
        });

        sub.subscribe('MESSAGES')
    }

    public initListeners() {
        const io = this.io
        console.log("init Socket Listeners");
        io.on('connect', (socket)=>{
            console.log(`New Socket connected: ${socket.id}`);
            
            socket.on('event:message', async ({message}:{message: string})=>{ 
                console.log(`Received message: ${message}`);
                // Handle the message event here
                await pub.publish('MESSAGES', JSON.stringify({message}));
            } )
        })

        sub.on('message', (channel, message) => {
            if (channel === 'MESSAGES') {
                io.emit('message', message)
            }
        })
    }

    get io(){
        return this._io
    }
}

export default SocketService