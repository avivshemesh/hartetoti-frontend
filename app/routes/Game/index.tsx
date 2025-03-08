import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';
import api from '~/api';
import { getGameSession } from '~/helpers/gameHelper';
import type { GameSettings } from '~/types/GameSettings';

const GamePage = () => {
    const { gameId } = useParams();
    const navigate = useNavigate(); // Hook for navigation

    // If no gameId is found, redirect to the home page
    useEffect(() => {
        if (!gameId) {
            navigate('/'); // Redirect to the home page if gameId is not provided
        }
    }, [gameId, navigate]);

    const [gameSettings, setGameSettings] = useState<GameSettings | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchGameSettings = async () => {
            if (gameId) {
                setLoading(true);
                try {
                    const gameSettings = await getGameSession(gameId)
                    if (!response.ok) {
                        throw new Error('Failed to fetch game settings');
                    }
                    setGameSettings(gameSettings);
                } catch (err: any) {
                    setError(err.message);
                } finally {
                    setLoading(false);
                }
            };
        }

        fetchGameSettings();
    }, [gameId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!gameSettings) {
        return <div>No game settings found.</div>;
    }

    return (
        <div className='gae-page'>
            <h1>{gameSettings.gameMode}</h1>
            <p>{gameSettings.questionCount}</p>
        </div>
    );
};

export default GamePage;
