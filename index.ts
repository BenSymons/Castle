type Board = string[][];

const EMPTY_SQUARE = '_';
const CASTLE = 'C';

export default function castle(board: Board): string[] | false {
  const [x, y] = findCastlePosition(board);
  const pieces = [
    ...getClosestPiecesToCastle(getPiecesOnColumn(x, board)),
    ...getClosestPiecesToCastle(getPiecesOnRow(y, board))
  ];

  return pieces.length > 0 ? pieces : false;
};

function findCastlePosition(board: Board): number[] {
  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
      if (board[y][x] === CASTLE) {
        return [x, y];
      }
    }
  }
  throw new Error('Failed to find the castle!');
}

function getPiecesOnColumn(x: number, board: Board): string[] {
  const pieces = [];
  for (let y = 0; y < board.length; y++) {
    let piece = board[y][x];
    if (piece !== EMPTY_SQUARE) {
      pieces.push(piece);
    }
  }
  return pieces;
}

function getPiecesOnRow(y: number, board: Board): string[] {
  const pieces = [];
  for (let x = 0; x < board[y].length; x++) {
    let piece = board[y][x];
    if (piece !== EMPTY_SQUARE) {
      pieces.push(piece);
    }
  }
  return pieces;
}

function getClosestPiecesToCastle(pieces: string[]): string[] {
  const castlePosition = pieces.indexOf(CASTLE);
  return pieces.slice(
    Math.max(castlePosition - 1, 0),
    Math.min(castlePosition + 2, pieces.length)
  ).filter((piece) => piece !== CASTLE);
}
