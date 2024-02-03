import Player, { ShipTypes, SpaceCoords } from "./Player"

export type BoardValue = number | string
export type BoardSetup = BoardValue[][]

export interface Space {
  rowIndex: number,
  spaceIndex: number,
  value: BoardValue
}

export type Row = Space[]
export type PlayerBoard = Row[]

enum GameState {
  WAITING_PLAYER, // waiting for player 2 to join
  SETTING_SHIPS, // waiting for both players to finish setting ships
  PLAYER1_TURN, // player 1's turn
  PLAYER2_TURN, // player 2's turn
  PLAYER1_WIN, // player 1 wins
  PLAYER2_WIN, // player 2 wins
}

class Battleship {
  private player1: Player;
  private player2: Player;
  private state: GameState;
  
  constructor() {
    this.player1 = new Player('Player 1')
    this.player2 = new Player('Player 2')
    this.state = GameState.WAITING_PLAYER
  }

  get gameState() {
    return this.state
  }

  getPlayer(player: 1 | 2) {
    return player === 1 ? this.player1 : this.player2
  }

  getPlayerBoard(player:1|2) {
    return player === 1 ? this.player1.playerBoard : this.player2.playerBoard
  }

  setShip(player: 1 | 2, ship: ShipTypes, spaces: SpaceCoords[]) {    
    player === 1 
    ? this.player1.setShip(ship, spaces)
    : this.player2.setShip(ship, spaces)
  }
}

export default Battleship