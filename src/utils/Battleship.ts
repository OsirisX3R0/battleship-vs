import Player from "./Player"

export type BoardValue = number | string
export type BoardSetup = BoardValue[][]

export interface Space {
  rowIndex: number,
  spaceIndex: number,
  value: BoardValue
}

export type Row = Space[]
export type PlayerBoard = Row[]

class Battleship {
  public player1: Player;
  public player2: Player;

  constructor() {
    this.player1 = new Player('Player 1')
    this.player2 = new Player('Player 2')
  }

  getPlayerBoard(player:1|2) {
    return player === 1 ? this.player1.board : this.player2.board
  }
}

export default Battleship