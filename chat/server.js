
const http = require ('http');
const WebSocket = require('ws');

const server = new WebSocket.Server({port: 4000});

let lastMessageTime = false;
let name = null;
let date = new Date();
let weekday = new Array(7);
weekday[0] = "Воскресенье";
weekday[1] = "Понедельник";
weekday[2] = "Вторник";
weekday[3] = "Среда";
weekday[4] = "Четверг";
weekday[5] = "Пятница";
weekday[6] = "Суббота";


server.on("connection", ws => {
ws.on("message", message => {
lastMessageTime = new Date();
message = message.toLowerCase();
server.clients.forEach(client => {
setTimeout(() => {
if ((new Date()) - lastMessageTime > 14500) {
ws.send("Ты тут?");
setTimeout(() => {
if ((new Date()) - lastMessageTime > 29500) {
ws.send("Я сейчас удалю папку \'Temp\' с твоего компьютера");
for (let i = 1; i <= 3; i++)
setTimeout(() => {
if ((new Date()) - lastMessageTime > 30000 + 1000 * 1) {
if (i < 3)
ws.send(i);
else {
ws.send(i + " пока, я буду скучать");
ws.close();
                        }
                     }
                }, 1000*i);
             }
        }, 15000);
    }
}, 15000);

if (client.readyState === WebSocket.OPEN) {
if (message == "привет") {
client.send("привет, а ты кто??");
return;
}
if (message == "как дела?") {
client.send("отлично, а твои как?");
return;
}
if (message == "пока") {
client.send("до свидания");
return;
}
if (message == "какой день месяца?") {
client.send(`${date.getDate()}`);
return;
}
if (message == "какой год?") {
client.send(`А год нынче такой: ${date.getFullYear()}`);
return;
}
if (message == "какой день?") {
client.send(`Сегодня   ${weekday[date.getDay()]}`);
return;
}
if (message == "сколько время?") {
client.send(`Сейчас -" ${date.toLocaleTimeString()} `);
return;
}
if (message == "который час?" || message == "какое сейчас время?") {
const time = new Date();
client.send("Сейчас - " + time.getHours() + "." + time.getMinutes());
return;
}
if (message == "как тебя зовут?") {
if (name == null) {
client.send("У меня нету имени, ты можешь сам придумать");
} else {
client.send("Меня зовут " + name);
}
return;
}
message = message.split(" ");
if (message[0] == "пусть") {
name = message[message.length - 1];
 client.send("теперь меня зовут " + name);
return;
}
ws.send("поищи сдесь - https://www.google.com/");
        }
    });
});
ws.send("welcome");
lastMessageTime = (new Date()).getTime();
});