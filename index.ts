export type Board = string[][]

const CASTLE = 'C'
const EMPTY = '_'

export default function castle(board: Board) {

  // find castle
  const castleLocation = findCastle(board)

  const rowTake = findPiecesInRow(board, castleLocation.rowIndex)

  const columnTake = findPiecesInColumn(board, castleLocation.columnIndex)

  // find where same index without stuff between

  const allTakes = [...rowTake, ...columnTake]
  if (!allTakes.length) {
    return false
  }
  const actualTakes = filterHiddenPieces(castleLocation, allTakes)

  return actualTakes.map(x => x.pieceName)
};

function findPiecesInRow(board: Board, rowIndex: number): PieceCoordinates[] {

  const row = board[rowIndex]
  const pieces = []
  for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {
    const element = row[columnIndex];

    if (isPieceNotCastle(element)) {
      pieces.push({ pieceName: element, rowIndex, columnIndex })
    }
  }
  return pieces
}

function findPiecesInColumn(board: Board, columnIndex: number): PieceCoordinates[] {
  const pieces = []

  for (let index = 0; index < board.length; index++) {
    const rows = board[index];
    const element = rows[columnIndex]
    if (isPieceNotCastle(element)) {
      pieces.push({ pieceName: element, rowIndex: index, columnIndex })
    }
  }
  return pieces
}

export function findPiece(board: Board, pieceString: string) {

  for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
    const row = board[rowIndex];
    for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {
      const elementOfRow = row[columnIndex];

      if (elementOfRow === pieceString) {
        return { rowIndex, columnIndex }
      }
    }
  }
  throw new Error('No castle on the board.')
}

export function findCastle(board: Board): CastleLocation {

  return findPiece(board, CASTLE)
}

function isPieceNotCastle(element: string) {
  if (element === EMPTY || element === CASTLE) {
    return false
  }
  return true
}
interface CastleLocation {
  rowIndex: number;
  columnIndex: number;
}

interface PieceCoordinates {
  pieceName: string;
  rowIndex: number;
  columnIndex: number;
}

function filterHiddenPieces(castleLocation: CastleLocation, allTakes: PieceCoordinates[]) {
  const filters = []
  for (let index = 0; index < allTakes.length; index++) {
    const take = allTakes[index];

    const north = allTakes.find(x => (x.columnIndex === castleLocation.columnIndex) && castleLocation.rowIndex < x.rowIndex && x.rowIndex < take.rowIndex)
    const south = allTakes.find(x => (x.columnIndex === castleLocation.columnIndex) && castleLocation.rowIndex > x.rowIndex && x.rowIndex > take.rowIndex)

    const east = allTakes.find(x => (x.rowIndex === castleLocation.rowIndex) && castleLocation.columnIndex > x.columnIndex && x.columnIndex > take.columnIndex)
    const west = allTakes.find(x => (x.rowIndex === castleLocation.rowIndex) && castleLocation.columnIndex < x.columnIndex && x.columnIndex < take.columnIndex)

    if (!north && !south && !east && !west) {
      filters.push(take)
    }
  }
  return filters
}

