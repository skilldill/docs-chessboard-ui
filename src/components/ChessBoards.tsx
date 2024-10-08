import "react-chessboard-ui/dist/index.css";
import type { FC } from "react";
import { ChessBoard, DEFAULT_PIECES_MAP } from "react-chessboard-ui";

const useCellSize = (defaultValue: number) => {
	if (typeof window === undefined) return defaultValue;
	if (window.innerWidth <= 460) return 36;
	if (window.innerWidth < 768) return 44;
	return defaultValue;
}

const getCustomPawnSize = () => {
	if (typeof window === undefined) return 40;
	if (window.innerWidth <= 460) return 20;
	if (window.innerWidth < 768) return 30;
	return 40;
}

const getCustomKnightSize = () => {
	if (typeof window === undefined) return 100;
	if (window.innerWidth <= 460) return 48;
	if (window.innerWidth < 768) return 64;
	return 100;
}

export const ChessBoardKings: FC = () => {
    const cellSize = useCellSize(100);
	return (
        <ChessBoard 
			FEN="2K2k2/8/8/8/8/8/8/8 w - - 0 1"
			onChange={(data) => {}}
			onEndGame={() => {}}
			config={{ cellSize }}
		/>
    );
}

export const ChessBoardDefault: FC = () => {
    const cellSize = useCellSize(70);
	return (
        <ChessBoard 
			FEN="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
			onChange={(data) => {}}
			onEndGame={() => {}}
			config={{ cellSize }}
		/>
    );
}

export const ChessBoardDefaultFEN: FC = () => {
    const cellSize = useCellSize(70);
	return (
        <ChessBoard 
			FEN="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
			onChange={(data) => {}}
			onEndGame={() => {}}
			config={{ cellSize }}
		/>
    );
}

export const ChessBoardKingPawnFEN: FC = () => {
	const cellSize = useCellSize(70);
    return (
        <ChessBoard 
			FEN="8/8/8/8/8/8/1K6/P7 w - - 0 1"
			onChange={(data) => { console.log(data) }}
			onEndGame={() => {}}
			config={{ cellSize }}
		/>
    );
}

export const ChessBoardClonsFEN: FC = () => {
	const cellSize = useCellSize(70);
    return (
        <ChessBoard 
			FEN="3k4/qqqqqqqq/8/8/8/8/QQQQQQQQ/3K4 b - - 0 1"
			onChange={(data) => {}}
			onEndGame={() => {}}
			config={{ cellSize }}
		/>
    );
}

export const ChessBoardReversed: FC = () => {
	const cellSize = useCellSize(70);
    return (
        <ChessBoard 
			FEN="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
			onChange={(data) => {}}
			onEndGame={() => {}}
			config={{ cellSize }}
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
		"pawn-white": () => <img width={getCustomPawnSize()} src="https://pics.clipartpng.com/midle/Pawn_White_Chess_Piece_PNG_Clip_Art-2751.png" />,
		"pawn-black": () => <img width={getCustomPawnSize()} src="https://pics.clipartpng.com/midle/Pawn_Black_Chess_Piece_PNG_Clip_Art-2764.png" />,
		"knight-white": () => <img height={getCustomKnightSize()} src="https://purepng.com/public/uploads/thumbnail//purepng.com-white-horse-jumpinghorsejumpingwhite-horsemountknighthackneyprad-481520976081ixkeq.png" />
	}
}

export const ChessBoardCustomConfig: FC = () => {
	const cellSize = useCellSize(70);
	return (
        <ChessBoard 
			FEN="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
			onChange={(data) => {}}
			onEndGame={() => {}}
			config={{ ...CUSTOM_CONFIG, cellSize }}
		/>
    );
}

export const ChessBoardPlayerColor: FC = () => {
	const cellSize = useCellSize(70);
	return (
		<ChessBoard 
			FEN="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
			onChange={(data) => {}}
			onEndGame={() => {}}
			config={{ cellSize }}
			playerColor="white"
		/>
	);
}

export const ChessBoardPawnPromotion: FC = () => {
	const cellSize = useCellSize(70);
	return (
		<ChessBoard 
			FEN="8/k5PK/8/8/8/8/8/8 w - - 0 1"
			onChange={(data) => {}}
			onEndGame={() => {}}
			config={{ cellSize }}
		/>
	);
}
