const a = "Meet Patel";
console.log(a);
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS Dates</title>
    <style>
        .container {
            color: white;
            background-color: brown;
            border: 3px solid black;
            border-radius: 8px;
            text-align: center;
            padding: 15px 10px;
            margin: auto;
            width: 70%;
            font-size: 24px;
        }

        #time {
            font: bold;
        }
    </style>
</head>

<body>
    <div class="container">
        Current time is <span id="time"></span>
    </div>
    <script>
        console.log("Hello this is Meet");

        // This will print current date.
        let now = new Date();
        console.log(now);

        // But if we are passing any argument to date method then it will print that date which we have mentioned in argument
        // let newDate = new Date(year, month, date, hours, minutes, seconds, miliseconds);
        let dt = new Date("2002-10-31");
        console.log(dt);

        // Some of the methods
        let yr = dt.getFullYear();
        console.log("The year is: " + yr);

        let dat = dt.getDate();
        console.log("The date is: " + dat);

        let day = dt.getDay();
        console.log("The day is: " + day);

        setInterval(updateTime, 1000);

        function updateTime() {
            time.innerHTML = new Date();
        }

    </script>
</body>

</html>`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});