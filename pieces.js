class PawnPiece_Black {
    constructor() {
        this.first_move = true;
        this.data_number = 9823;
        this.data_color = 'b';
        this.data_name = 'pawn';
    }
}

class KingPiece_Black {
    constructor() {
        this.first_move = true;
        this.data_number = 9818;
        this.data_color = 'b';
        this.data_name = 'king';
    }
}

class QueenPiece_Black {
    constructor() {
        this.first_move = true;
        this.data_number = 9819;
        this.data_color = 'b';
        this.data_name = 'queen';
    }
}


class RookPiece_Black {
    constructor() {
        this.first_move = true;
        this.data_number = 9820;
        this.data_color = 'b';
        this.data_name = 'rook';
    }
}


class BishopPiece_Black {
    constructor() {
        this.first_move = true;
        this.data_number = 9821;
        this.data_color = 'b';
        this.data_name = 'bishop';
    }
}

class KnightPiece_Black {
    constructor() {
        this.first_move = true;
        this.data_number = 9822;
        this.data_color = 'b';
        this.data_name = 'knight';
    }
}


/*
============White Pieces
*/


class PawnPiece_White {
    constructor() {
        this.first_move = true;
        this.data_number = 9817;
        this.data_color = 'w';
        this.data_name = 'pawn';
    }
}

class KingPiece_White {
    constructor() {
        this.first_move = true;
        this.data_number = 9812;
        this.data_color = 'w';
        this.data_name = 'king';
    }
}

class QueenPiece_White {
    constructor() {
        this.first_move = true;
        this.data_number = 9813;
        this.data_color = 'w';
        this.data_name = 'queen';
    }
}


class RookPiece_White {
    constructor() {
        this.first_move = true;
        this.data_number = 9814;
        this.data_color = 'w';
        this.data_name = 'rook';
    }
}


class BishopPiece_White {
    constructor() {
        this.first_move = true;
        this.data_number = 9815;
        this.data_color = 'w';
        this.data_name = 'bishop';
    }
}

class KnightPiece_White {
    constructor() {
        this.first_move = true;
        this.data_number = 9816;
        this.data_color = 'w';
        this.data_name = 'knight';
    }
}


/*
=====================
*/

module.exports = {
    PawnPiece_Black,
    KingPiece_Black,
    QueenPiece_Black,
    RookPiece_Black,
    BishopPiece_Black,
    KnightPiece_Black,
    PawnPiece_White,
    KingPiece_White,
    QueenPiece_White,
    RookPiece_White,
    BishopPiece_White,
    KnightPiece_White,
}