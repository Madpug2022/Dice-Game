// Nombre de jugadores
    var player1 = "Jugador 1";
    var player2 = "Jugador 2";

    // Cambiar nombre de jugadores
    function editNames() {
        player1 = prompt("Cambiar nombre de Jugador 1");
        player2 = prompt("Cambiar nombre de Jugador 2");

        document.querySelector("p.Player1").innerHTML = player1;
        document.querySelector("p.Player2").innerHTML = player2;
    }

    // Arrojar Dados
    function rollTheDice() {
        setTimeout(function () {
            var randomNumber1 = Math.floor(Math.random() * 6) + 1;
            var randomNumber2 = Math.floor(Math.random() * 6) + 1;

            document.querySelector(".img1").setAttribute("src",
                "dice" + randomNumber1 + ".png");

            document.querySelector(".img2").setAttribute("src",
                "dice" + randomNumber2 + ".png");

            if (randomNumber1 === randomNumber2) {
                document.querySelector("h1").innerHTML = "Empate!";
        }

            else if (randomNumber1 < randomNumber2) {
                document.querySelector("h1").innerHTML
                                = (player2 + " GANA!");
            }

            else {
                document.querySelector("h1").innerHTML
                                = (player1 + " GANA!");
            }
        }, 2500);
    }
