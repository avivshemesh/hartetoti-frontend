import api from "~/api";
import type { GameSettings } from "~/types/GameSettings";

const defaultGameSettings = {
    gameMode: 'classic',
    questionCount: 15,
    secondsPerQuestion: 10
}

export const initGame = async (settings: GameSettings = defaultGameSettings) => {
    return await api.game.createGameSession(settings)
}

export const getGameSession = async (gameId: string) => {
    return await api.game.getGameSession(gameId)
}