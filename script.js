function createUser(name, choice) { //factory for creating players.
    const player_name = name;
    const letter = choice;
    return {name, choice};
};

function createBoard() {        //factory for creating board.
    let board = [];
    for (let i = 0; i<9; i++) {
        board.push('null');
    };
    return {board};
};


function playGame(user1, user2) {
    user1 = createUser('alex', 'x');
    user2 = createUser('mark', 'o');
    board = createBoard();
};