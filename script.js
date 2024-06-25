function gameboard() {
    const user1 = createUser('player1', 1, 'x');
    const user2 = createUser('player2', 2, 'o')
    const table = {
        board : [],
    };
}

function createUser(user, player_number, symbol) {
    const Player = user;
    const Player_number  = player_number;
    const player_symbol = symbol;
    return {Player, Player_number, player_symbol};
};