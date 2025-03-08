import { post, get } from "./base";

export default {
    createGameSession: (body: any) => post("/game-session/create-game-session", body),
    getGameSession: (gameId: string) => get(`/game-session/get-game-session/${gameId}`)
}