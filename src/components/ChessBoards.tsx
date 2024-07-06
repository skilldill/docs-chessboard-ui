import "react-chessboard-ui/dist/index.css";
import type { FC } from "react";
import { ChessBoard, DEFAULT_PIECES_MAP } from "react-chessboard-ui";


export const ChessBoardKings: FC = () => {
    return (
        <ChessBoard 
			FEN="2K2k2/8/8/8/8/8/8/8 w - - 0 1"
			onChange={(data) => {}}
			onEndGame={() => {}}
			config={{ cellSize: 100 }}
		/>
    );
}

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
			onChange={(data) => { console.log(data) }}
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

const CUSTOM_CONFIG = { 
	cellSize: 70,
	selectedCellColor: "gray",
	selectedCellBorder: "4px dashed black",
	circleMarkColor: "red",
	whiteCellColor: "#166",
	blackCellColor: "#e0e0e0",
	arrowColor: "red",
	markedCellColor: "red",
	checkedCellColor: "green",
	piecesMap: {
		...DEFAULT_PIECES_MAP,
		"pawn-white": () => <img width={40} src="https://pics.clipartpng.com/midle/Pawn_White_Chess_Piece_PNG_Clip_Art-2751.png" />,
		"pawn-black": () => <img width={40} src="https://pics.clipartpng.com/midle/Pawn_Black_Chess_Piece_PNG_Clip_Art-2764.png" />,
		"knight-white": () => <img height={100} src="https://purepng.com/public/uploads/thumbnail//purepng.com-white-horse-jumpinghorsejumpingwhite-horsemountknighthackneyprad-481520976081ixkeq.png" />
	}
}

export const ChessBoardCustomConfig: FC = () => {
	return (
        <ChessBoard 
			FEN="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
			onChange={(data) => {}}
			onEndGame={() => {}}
			config={CUSTOM_CONFIG}
		/>
    );
}

export const ChessBoardPlayerColor: FC = () => {
	return (
		<ChessBoard 
			FEN="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
			onChange={(data) => {}}
			onEndGame={() => {}}
			config={{ cellSize: 70 }}
			playerColor="white"
		/>
	);
}