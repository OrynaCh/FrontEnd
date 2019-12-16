const http = require ('http');
const WebSocket = require('ws');

const server = new WebSocket.Server({port: 4000});

let lastMessageTime = false;
let name = null;
let date = new Date();

server.on("connection", ws => {
    ws.on("message", message => {
        lastMessageTime = new Date();
        message = message.toLowerCase();
        server.clients.forEach(client => {
            setTimeout(() => {
                if ((new Date()) - lastMessageTime > 14500) {
                    ws.send("ты тут?");
                    setTimeout(() => {
                        if ((new Date()) - lastMessageTime > 29500) {
                            ws.send("через 3 секунды я уйду");
                            for (let i = 1; i <= 3; i++)
                                setTimeout(() => {
                                    if ((new Date()) - lastMessageTime > 32500) {
                                            ws.close();
                                    }
                                }, 1000*i);
                        }
                    }, 15000);
                }
            }, 15000);
                if (client.readyState === WebSocket.OPEN) {
                    if (message == "привет") {
                        client.send("привет");
                        return;
                    }
                    if (message == "как дела?") {
                        client.send("отлично, я же бот");
                        return;
                    }
                    if (message == "пока") {
                        client.send("до свидания");
                        return;
                    }
                    if (message == "как тебя зовут?") {
                        client.send("меня зовут бот Андрей");
                        return;
                    }
                    if (message == "который час?") {
                        const time = new Date();
                        client.send("поточное время " + time.getHours() + "." + time.getMinutes());
                        return;
                    }
                    message = message.split(" ");
                    if (message[0] == "пусть") {
                        name = message[message.length - 1];
                        client.send("теперь меня зовут " + name);
                        return;
                    }
                    ws.send("поищи здесь - https://www.google.com/");
                }
            });
        });
//ws.send("welcome");
        lastMessageTime = (new Date()).getTime();

});