const BOARD_LENGTH = 8
const BOARD_HEIGHT = 8
let victims: any = []
let castleColumn: any;
let castleRow: any; 


export default function castle(board: any) {
    findCastle(board)
    checkLeft(board)
    checkRight(board)
    checkUp(board)
    checkDown(board)
    if(!victims.length) return false;
    return victims;
};

function findCastle(board: any){
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 'C') {
                castleRow = i;
                castleColumn = j;
                break;
            }
        }
    }
}

function checkLeft(board: any){
    for (let y = castleColumn - 1; y >= 0; y--){
        if (board[castleRow][y] !== "_"){
            victims.push(board[castleRow][y])
            break;
        }
    }
}

function checkRight(board: any){
    for (let y = castleColumn + 1; y < BOARD_LENGTH; y++){
        if (board[castleRow][y] !== "_"){
            victims.push(board[castleRow][y])
            break;
        }
    }
}

function checkUp(board: any){
    for (let x = castleRow - 1; x >= 0; x--){
        if (board[x][castleColumn] !== "_"){
            victims.push(board[x][castleColumn])
            break;
        }
    }
}

function checkDown(board: any){
    for (let x = castleRow + 1; x < BOARD_HEIGHT; x++){
        if (board[x][castleColumn] !== "_"){
            victims.push(board[x][castleColumn])
            break;
        }
    }
}