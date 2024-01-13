import { BoardSetup, PlayerBoard } from "./Battleship";

export enum ShipTypes {
  C,
  B,
  D,
  S,
  U
}

export type StartingShips = {
  [key in ShipTypes]: number 
}

export type ShipAbbrs = {
  [key in ShipTypes]: string 
}

export type Ships = {
  [key in ShipTypes]: string 
}

export interface SpaceCoords {
  rowInd: number,
  spaceInd: number
}

class Player {
  static startingShips:StartingShips = {
    [ShipTypes.C]: 5,
    [ShipTypes.B]: 4,
    [ShipTypes.D]: 3,
    [ShipTypes.S]: 3,
    [ShipTypes.U]: 2,
  };

  static shipAbbrs:ShipAbbrs = {
    [ShipTypes.C]: "C",
    [ShipTypes.B]: "B",
    [ShipTypes.D]: "D",
    [ShipTypes.S]: "S",
    [ShipTypes.U]: "U",
  };

  static ships:Ships = {
    [ShipTypes.C]: "Carrier",
    [ShipTypes.B]: "Battleship",
    [ShipTypes.D]: "Destroyer",
    [ShipTypes.S]: "Submarine",
    [ShipTypes.U]: "Cruiser",
  };

  static generateEmptyBoard() {
    let board: PlayerBoard = []

    for(let rowIndex = 0; rowIndex < 10; rowIndex++) {
      board.push([])
      for(let spaceIndex = 0; spaceIndex < 10; spaceIndex++) {
        board[rowIndex].push({
          rowIndex,
          spaceIndex,
          value:0
        })
      }
    }

    return board
  }

  public name: string
  public board: PlayerBoard;
  public ships: StartingShips

  constructor(name:string) {
    this.name = name
    this.board = Player.generateEmptyBoard()
    this.ships = {...Player.startingShips}
  }

  setShip(type:ShipTypes, spaces:SpaceCoords[]) {
    for(let coords of spaces) {
      this.board[coords.rowInd][coords.spaceInd].value = Player.shipAbbrs[type]
    }
  }
}

export default Player