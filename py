<!DOCTYPE html>
<html>
<head>
    <title>Pokemon Team Battle</title>
    <style>
        .column {
            float: left;
            width: 50%;
        }
        .row:after {
            content: "";
            display: table;
            clear: both;
        }
    </style>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
<body>
    <h1>Pokemon Team Battle</h1>
    <button id="randomBattle">Battaglia Casuale</button>
    <div class="row">
        <div id="team1" class="column"></div>
        <div id="team2" class="column"></div>
    </div>
    <div id="battleResult"></div>

    <script>
        function getPokemon() {
            let id = Math.floor(Math.random() * 150) + 1; // Genera un ID casuale per un Pokemon
            return $.get(https://pokeapi.co/api/v2/pokemon/${id});
        }

        function displayPokemon(pokemon, teamId) {
            let sprite = pokemon.sprites.front_default;
            let name = pokemon.name;
            $(#${teamId}).append(<img src="${sprite}" alt="${name}"><br>${name}<br>);
        }

        function battle(team1, team2) {
            let power1 = team1.reduce((sum, pokemon) => sum + pokemon.base_experience, 0);
            let power2 = team2.reduce((sum, pokemon) => sum + pokemon.base_experience, 0);

            if (power1 > power2) {
                return 'Il Team 1 vince!';
            } else if (power2 > power1) {
                return 'Il Team 2 vince!';
            } else {
                return 'Pareggio!';
            }
        }

        $('#randomBattle').click(function() {
            let team1 = [];
            let team2 = [];

            for (let i = 0; i < 3; i++) {
                $.when(getPokemon(), getPokemon()).done(function(pokemon1, pokemon2) {
                    team1.push(pokemon1[0]);
                    team2.push(pokemon2[0]);

                    displayPokemon(pokemon1[0], 'team1');
                    displayPokemon(pokemon2[0], 'team2');

                    if (team1.length === 6) {
                        let result = battle(team1, team2);
                        $('#battleResult').text(result);
                    }
                });
            }
        });
    </script>
</body>
</html>