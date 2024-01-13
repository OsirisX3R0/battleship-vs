import Battleship from "@/utils/Battleship";
import { ShipTypes, Ships, SpaceCoords } from "@/utils/Player";
import { useReducer } from "react";

type SetShipAction = {
  type: 'SET_SHIP',
  player: 1 | 2,
  spaces: SpaceCoords[],
  ship: ShipTypes
}

type BattleShipReducerAction = SetShipAction

type BattleShipReducer = (state: Battleship, action: BattleShipReducerAction) => void

const battleShipReducer:BattleShipReducer = (state, action) => {
  switch(action.type) {
    case 'SET_SHIP':
      action.player === 1 
        ? state.player1.setShip(action.ship, action.spaces)
        : state.player2.setShip(action.ship, action.spaces)
    default:
      return state
  }
}

export default function Gameboard() {
  const [battleship, dispatchBattleship] = useReducer<BattleShipReducer, Battleship>(battleShipReducer, new Battleship())
}