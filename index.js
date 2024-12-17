"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = castle;
function castle(board) {
    var capturedPieces = [];
    var rowArray = board.find(function (row) { return row.includes('C'); });
    var columnPosition = rowArray === null || rowArray === void 0 ? void 0 : rowArray.indexOf('C');
    for (var _i = 0, _a = rowArray; _i < _a.length; _i++) {
        var square = _a[_i];
        if (square === 'C')
            continue;
        if (square !== '_')
            capturedPieces.push(square);
    }
    ;
    for (var _b = 0, board_1 = board; _b < board_1.length; _b++) {
        var row = board_1[_b];
        var square = row[columnPosition];
        if (square === 'C')
            continue;
        if (square !== '_')
            capturedPieces.push(square);
    }
    return capturedPieces.length ? capturedPieces : false;
}
;
