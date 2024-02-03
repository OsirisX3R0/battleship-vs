import Battleship from "@/utils/Battleship";
import { ShipTypes, SpaceCoords } from "@/utils/Player";
import { useReducer } from "react";

type SetShipAction = {
  type: 'SET_SHIP',
  player: 1 | 2,
  spaces: SpaceCoords[],
  ship: ShipTypes,
}

type BattleShipReducerAction = SetShipAction

type BattleShipReducer = (state: Battleship, action: BattleShipReducerAction) => Battleship

const battleShipReducer: BattleShipReducer = (state, action) => {
  switch(action.type) {
    case 'SET_SHIP':
      state.setShip(action.player, action.ship, action.spaces)

      return state
    default:
      return state
  }
}

export default function Gameboard() {
  const [battleship, dispatchBattleship] = useReducer<BattleShipReducer, Battleship>(battleShipReducer, new Battleship(), (game: Battleship) => game)
}