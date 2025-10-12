import "react-chessboard-ui/dist/index.css";
import { useState, type FC } from "react";
import { ChessBoard, DEFAULT_PIECES_MAP } from "react-chessboard-ui";
import { PAUL_MORPHY_OPERA_GAME, SCHOLARS_MATE, TRANSFORM_TO_QUEEN } from "../constants/moves";
import "./styles.css";

const useCellSize = (defaultValue: number) => {
	if (typeof window === undefined) return defaultValue;
	if (window.innerWidth <= 460) return 36;
	if (window.innerWidth < 1144) return 44;
	if (window.innerWidth < 1376) return 56;
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

export const ChessBoardStrangeFEN: FC = () => {
	const cellSize = useCellSize(70);
	return (
        <ChessBoard 
			FEN="rnbqQBNR/2k2K2/ppppPPPP/8/8/8/8/8 w - - 0 1"
			onChange={(data) => {}}
			onEndGame={() => {}}
			config={{ cellSize }}
		/>
    );
}

export const ChessBoardPaulMorphyOperaGame: FC = () => {
	const cellSize = useCellSize(70);

	const [moveIndex, setMoveIndex] = useState<number>();
    const [currentMove, setCurrentMove] = useState<any>();

    const nextMove = () => {
        if (moveIndex === undefined) {
            setCurrentMove({
                move: PAUL_MORPHY_OPERA_GAME[0],
                withTransition: true
            });
            setMoveIndex(0);
            return;
        }

        if (moveIndex + 1 === PAUL_MORPHY_OPERA_GAME.length) {
            return;
        }

        setCurrentMove({
            move: PAUL_MORPHY_OPERA_GAME[moveIndex + 1],
            withTransition: true
        });

        setMoveIndex(moveIndex + 1);
    }

	return (
		<div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 20 }}>
			<ChessBoard 
				FEN="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
				onChange={(data) => {}}
				onEndGame={() => {}}
				config={{ cellSize }}
				change={currentMove}
				viewOnly
			/>

			<button className="button" onClick={nextMove}>Next move</button>
		</div>
	);
}

export const ChessBoardScholarsMate: FC = () => {
	const cellSize = useCellSize(70);

	const [moveIndex, setMoveIndex] = useState<number>();
    const [currentMove, setCurrentMove] = useState<any>();

    const nextMove = () => {
        if (moveIndex === undefined) {
            setCurrentMove({
                move: SCHOLARS_MATE[0],
                withTransition: true
            });
            setMoveIndex(0);
            return;
        }

        if (moveIndex + 1 === SCHOLARS_MATE.length) {
            return;
        }

        setCurrentMove({
            move: SCHOLARS_MATE[moveIndex + 1],
            withTransition: true
        });

        setMoveIndex(moveIndex + 1);
    }

	return (
		<div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 20 }}>
			<ChessBoard 
				FEN="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
				onChange={(data) => {}}
				onEndGame={() => {}}
				config={{ cellSize }}
				change={currentMove}
				viewOnly
			/>

			<button className="button" onClick={nextMove}>Next move</button>
		</div>
	);
}

export const ChessBoardTransformToQueen: FC = () => {
	const cellSize = useCellSize(70);
	const [moveIndex, setMoveIndex] = useState<number>();
    const [currentMove, setCurrentMove] = useState<any>();

    const nextMove = () => {
        if (moveIndex === undefined) {
            setCurrentMove({
                move: TRANSFORM_TO_QUEEN[0],
                withTransition: true
            });
            setMoveIndex(0);
            return;
        }

        if (moveIndex + 1 === TRANSFORM_TO_QUEEN.length) {
            return;
        }

        setCurrentMove({
            move: TRANSFORM_TO_QUEEN[moveIndex + 1],
            withTransition: true
        });

        setMoveIndex(moveIndex + 1);
    }
	return (
		<div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 20 }}>
			<ChessBoard 
				FEN="k7/p7/8/8/8/8/8/7K w - - 0 1"
				onChange={() => {}}
				onEndGame={() => {}}
				config={{ cellSize }}
				change={currentMove}
			/>

			<button className="button" onClick={nextMove}>Next move</button>
		</div>
	);
}