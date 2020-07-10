import React, { useContext, useEffect } from 'react';
import uuid from 'uuid/dist/v4';

import { GameContext } from '../contexts/GameContext';

import calculateWinner from '../utils/calculateWinner';

import Square from './Square';
import Player from './Player';
import Reset from './Reset';
import Winner from './Winner';
import History from './History';

export default function Board() {
    const { squares, setWhoIsWinner, history } = useContext(GameContext);

    useEffect(() => {
        const winner = calculateWinner(squares);
        if (winner) {
            setWhoIsWinner(winner);
        }
    }, [history, squares, setWhoIsWinner]);

    return (
        <div className="board-container">
            <Player />
            <Winner />
            <Reset />
            <div className="board">
                {squares.map((value, index) => (
                    <Square value={value} index={index} key={uuid()} />
                ))}
            </div>
            <History />
        </div>
    );
}