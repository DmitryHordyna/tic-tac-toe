class TicTacToe {
  currentPlayer = 'x';
 winner = null;
    gameField = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (!this.gameField[rowIndex][columnIndex]) {
          this.gameField[rowIndex][columnIndex] = this.currentPlayer;
            this.currentPlayer = this.currentPlayer == 'x' ? 'o' : 'x';
        };
    };

  
    isFinished() {
        return this.isDraw() || Boolean(this.getWinner());
        
    }

    getWinner() {

        if (this.gameField[0][0] === this.gameField[1][1] && this.gameField[0][0] === this.gameField[2][2]) { return this.winner = this.gameField[0][0] };
        if (this.gameField[0][2] === this.gameField[1][1] && this.gameField[0][2] === this.gameField[2][0]) { return this.winner = this.gameField[0][2] };
      
        for (let i = 0; i < 3; i++) {
            if (this.gameField[i][0] === this.gameField[i][1] && this.gameField[i][0] === this.gameField[i][2]) { return this.winner = this.gameField[i][0] }
            if (this.gameField[0][i] === this.gameField[1][i] && this.gameField[0][i] === this.gameField[2][i]) { return this.winner = this.gameField[0][i] }
        };
   return null
    };

    
    noMoreTurns() {
        
        if (this.gameField.flat().includes(null)) {
            return false
        }
        return true;
    };

  isDraw() {
      return this.noMoreTurns() && !this.getWinner();
    };

    getFieldValue(rowIndex, colIndex) {
        return this.gameField[rowIndex][colIndex];
    };
}

module.exports = TicTacToe;
