    let board = [];

    function get_user_cur_move() {
        const user1 = createUser('player1', 1, 'x');
        const user2 = createUser('player2', 2, 'o')
        let cur_move = 0;
        move();

        function move() {
            if (cur_move % 2 == 0) {
                let addPoint = prompt('What index would you like to play your move?');
                board.splice(addPoint, user1.symbol, 0);
                cur_move++;
            } else if (cur_move % 2 != 0) {
                let addPoint = prompt('What index would you like to play your move?');
                board.splice(addPoint, user2.symbol, 0);
                cur_move++;
            }};
        
        console.log(board);

    };




function createUser(user, player_number, symbol) {
    const Player = user;
    const Player_number  = player_number;
    const player_symbol = symbol;
    return {Player, Player_number, player_symbol};
};

