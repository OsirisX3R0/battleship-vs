import prisma from '@/core/prisma'
import { type NextRequest } from 'next/server'

type GameRequestParams = {
  id?: number,
  code?: string,
  players?: 1 | 2
}

type DeleteGameRequest = {
  params: GameRequestParams
}

export async function POST(request: Request) {
  let { code } = await request.json()
  return await prisma.games.create({
    data: {
      code,
      players: 1
    } 
  })
}

export async function DELETE(request: Request, {params}: DeleteGameRequest) {
  return await prisma.games.delete({
    where: { id: params.id }
  })
}