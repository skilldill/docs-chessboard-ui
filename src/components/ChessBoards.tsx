import type { FC } from "react";
import { ChessBoard } from "react-chessboard-ui";
import 'react-chessboard-ui/dist/index.css';

export const ChessBoardDefault: FC = () => {
    return (
        <ChessBoard 
			FEN="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
			onChange={(data) => {}}
			onEndGame={() => {}}
			config={{ cellSize: 70 }}
		/>
    );
}

export const ChessBoardDefaultFEN: FC = () => {
    return (
        <ChessBoard 
			FEN="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
			onChange={(data) => {}}
			onEndGame={() => {}}
			config={{ cellSize: 70 }}
		/>
    );
}

export const ChessBoardKingPawnFEN: FC = () => {
    return (
        <ChessBoard 
			FEN="8/8/8/8/8/8/1K6/P7 w - - 0 1"
			onChange={(data) => {}}
			onEndGame={() => {}}
			config={{ cellSize: 70 }}
		/>
    );
}

export const ChessBoardClonsFEN: FC = () => {
    return (
        <ChessBoard 
			FEN="3k4/qqqqqqqq/8/8/8/8/QQQQQQQQ/3K4 b - - 0 1"
			onChange={(data) => {}}
			onEndGame={() => {}}
			config={{ cellSize: 70 }}
		/>
    );
}

export const ChessBoardReversed: FC = () => {
    return (
        <ChessBoard 
			FEN="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
			onChange={(data) => {}}
			onEndGame={() => {}}
			config={{ cellSize: 70 }}
			reversed
		/>
    );
}
