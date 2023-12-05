const mqtt = require('mqtt')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
var client  = mqtt.connect('ws://broker.emqx.io:8083/mqtt',{
   port:8083,
   username:'',
   password:'',
})

client.on('connect', function () {
 client.subscribe('test/realtime', function (err) {
   if (!err) {
     client.publish('test/realtime', JSON.stringify({
       content: 'get-realtime'
     }))
   }
 })
})

client.on('message', function (topic, message) {
 // message is Buffer
 console.log(message.toString())
 client.end()
})

app.use(bodyParser.urlencoded({extended:false}))
app.get('/fuels/histories',(req,res)=>{

})

app.post('/fuels/histories',(req,res)=>{

})

app.listen(4000,()=>{
  console.log('running on port 4000')
})