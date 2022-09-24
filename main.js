<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment 4</title>


    <style>
        .container {
            align-items: center;
            text-align: center;
        }
        .image {
            padding-top: 40px;
        }
        .sec1{
            background-color: yellow;
            border: 1px solid black;
            padding: 20px 20px;
            margin-bottom: 25px;
        }
        .sec2{
            background-color: rgb(245, 148, 255);
            border: 3px solid black;
            padding: 20px 20px;
        }
        #mail {
            background-color: aqua;
            box-sizing: border-box;
            border: 1px solid black;
            padding: 50px 50px;
        }
    </style>
</head>

<body>
    <section class="container">
        <div class="sec1">
            <div class="name">
                <p id="name">Click here to display name: </p>
                <button onclick=nme()>Show Name</button>
            </div>
            <div class="registration number">
                <p id="roll">Click here to display registration number: </p>
                <button onclick=reg()>Show Registration number</button>
            </div>
        </div>
        <div class="sec2">
            <div class="image" id="image">
                <img src="gigi.jpg" alt="Gigi" width="300px" height="200px"
                    onmouseover="large(this)" onmouseout="norm(this)">
            </div>
            <div id="pname">
                <p font-size="30px" id="pname" onmouseover="plarge(this)" onmouseout="pnorm(this)">Gigi</p>
            </div>
        </div>
        <div class="mail">
            <p id="mail">gangotri.bhattacharjee01@gmail.com</p>
        </div>
    </section>

    <script>
        function nme() {
            alert("Gangotri Bhattacharjee");
        }

        function reg() {
            alert("202000007");
        }

        function large(x) {
            x.style.height = "300px";
            x.style.width = "450px";
        }

        function norm(x) {
            x.style.height = "200px";
            x.style.width = "300px";
        }
        function plarge(x) {
            x.style.fontSize = "40px"
        }
        function pnorm(x) {
            x.style.fontSize = "20px"
        }
    </script>
</body>
</html>
