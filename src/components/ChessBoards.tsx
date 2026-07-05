import "react-chessboard-ui/dist/index.css";
import { useEffect, useRef, useState, type ComponentProps, type FC } from "react";
import { ChessBoard, DEFAULT_PIECES_MAP } from "react-chessboard-ui";
import { PAUL_MORPHY_OPERA_GAME, SCHOLARS_MATE, TRANSFORM_TO_QUEEN } from "../constants/moves";
import "./styles.css";

type ChessBoardProps = ComponentProps<typeof ChessBoard>;
type ClickData = Parameters<NonNullable<ChessBoardProps["onClick"]>>[0];
type FigureColor = ClickData["currentColor"];

const WRONG_COLOR_CLICK_LIMIT = 2;
const NOTIFICATION_SHOW_TIME = 2200;

const BoardNotification: FC<{ message: string }> = ({ message }) => {
	return (
		<div className="boardNotification" role="status" aria-live="polite">
			{message}
		</div>
	);
}

const InteractiveChessBoard: FC<ChessBoardProps> = ({ onChange, onClick, ...props }) => {
	const [notification, setNotification] = useState("");
	const hasMovedRef = useRef(false);
	const wrongColorClickCountRef = useRef(0);
	const lastMovedColorRef = useRef<FigureColor>();
	const nextMoveColorRef = useRef<FigureColor>();

	useEffect(() => {
		if (!notification) {
			return;
		}

		const timeoutId = window.setTimeout(() => setNotification(""), NOTIFICATION_SHOW_TIME);

		return () => window.clearTimeout(timeoutId);
	}, [notification]);

	const handleChange: ChessBoardProps["onChange"] = (moveData) => {
		hasMovedRef.current = true;
		wrongColorClickCountRef.current = 0;
		setNotification("");
		lastMovedColorRef.current = moveData.figure.color;
		nextMoveColorRef.current = moveData.figure.color === "white" ? "black" : "white";
		onChange(moveData);
	}

	const handleClick = (data: ClickData) => {
		onClick?.(data);

		const clickedFigure = data.cellData.figure;

		if (!hasMovedRef.current) {
			return;
		}

		if (!clickedFigure) {
			wrongColorClickCountRef.current = 0;
			return;
		}

		if (clickedFigure.color === lastMovedColorRef.current) {
			wrongColorClickCountRef.current += 1;

			if (wrongColorClickCountRef.current === WRONG_COLOR_CLICK_LIMIT && nextMoveColorRef.current) {
				setNotification(`Now move ${nextMoveColorRef.current}`);
				wrongColorClickCountRef.current = 0;
			}

			return;
		}

		wrongColorClickCountRef.current = 0;
	}

	return (
		<div className="interactiveChessBoard">
			{notification && <BoardNotification message={notification} />}
			<ChessBoard {...props} onChange={handleChange} onClick={handleClick} />
		</div>
	);
}

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
    const squareSize = useCellSize(100);
	return (
        <InteractiveChessBoard 
			FEN="2K2k2/8/8/8/8/8/8/8 w - - 0 1"
			onChange={(data) => {}}
			onEndGame={() => {}}
			config={{ squareSize }}
		/>
    );
}

export const ChessBoardDefault: FC = () => {
    const squareSize = useCellSize(70);
	return (
        <InteractiveChessBoard 
			FEN="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
			onChange={(data) => {}}
			onEndGame={() => {}}
			config={{ squareSize }}
		/>
    );
}

export const ChessBoardDefaultFEN: FC = () => {
    const squareSize = useCellSize(70);
	return (
        <InteractiveChessBoard 
			FEN="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
			onChange={(data) => {}}
			onEndGame={() => {}}
			config={{ squareSize }}
		/>
    );
}

export const ChessBoardKingPawnFEN: FC = () => {
	const squareSize = useCellSize(70);
    return (
        <ChessBoard 
			FEN="8/8/8/8/8/8/PK6/8 w - - 0 1"
			onChange={(data) => { console.log(data) }}
			onEndGame={() => {}}
			playerColor="white"
			toggleTurn={false}
			config={{ squareSize }}
		/>
    );
}

export const ChessBoardClonsFEN: FC = () => {
	const squareSize = useCellSize(70);
    return (
        <InteractiveChessBoard 
			FEN="3k4/qqqqqqqq/8/8/8/8/QQQQQQQQ/3K4 w - - 0 1"
			onChange={(data) => {}}
			onEndGame={() => {}}
			config={{ squareSize }}
		/>
    );
}

export const ChessBoardReversed: FC = () => {
	const squareSize = useCellSize(70);
    return (
        <InteractiveChessBoard 
			FEN="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
			onChange={(data) => {}}
			onEndGame={() => {}}
			config={{ squareSize }}
			reversed
		/>
	);
}

export const ChessBoardArrows: FC = () => {
	const squareSize = useCellSize(70);
	const arrows = [
		{ start: [4, 6], end: [4, 4] },
		{ start: [4, 1], end: [4, 3], color: "#f97316" },
		{ start: [6, 7], end: [5, 5], color: "#5a16f9" },
		{ start: [1, 0], end: [2, 2], color: "#16f943" },
	];

	return (
		<ChessBoard
			FEN="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
			onChange={() => {}}
			onEndGame={() => {}}
			config={{ squareSize, arrowColor: "#2563eb" }}
			arrows={arrows}
			viewOnly
		/>
	);
}

export const ChessBoardHeroBanner: FC = () => {
	const squareSize = typeof window !== "undefined" && window.innerWidth <= 460 ? 30 : useCellSize(63);

	return (
		<div className="heroChessBoard" style={{ width: 'fit-content', height: 'fit-content', overflow: 'hidden', borderRadius: '1rem' }}>
			<InteractiveChessBoard
				FEN="r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 2 3"
				onChange={() => {}}
				onEndGame={() => {}}
				config={{
					squareSize,
					whiteCellColor: "#f8fafc",
					blackCellColor: "#d8deea",
					arrowColor: "#3b82f6",
				}}
			/>
		</div>
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
		"pawn-white": () => <img width={40} src="https://react-chessboard-ui.dev/pawn_white_custom.png" />,
		"pawn-black": () => <img width={40} src="https://react-chessboard-ui.dev/pawn_black_custom.png" />,
		"knight-white": () => <img height={100} src="https://react-chessboard-ui.dev/knight_white_custom.png" />
	}
}

export const ChessBoardCustomConfig: FC = () => {
	const squareSize = useCellSize(70);
	return (
        <InteractiveChessBoard 
			FEN="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
			onChange={(data) => {}}
			onEndGame={() => {}}
			config={{ ...CUSTOM_CONFIG, squareSize }}
		/>
    );
}

export const ChessBoardPlayerColor: FC = () => {
	const squareSize = useCellSize(70);
	return (
		<InteractiveChessBoard 
			FEN="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
			onChange={(data) => {}}
			onEndGame={() => {}}
			config={{ squareSize }}
			playerColor="white"
		/>
	);
}

export const ChessBoardToggleTurn: FC = () => {
	const squareSize = useCellSize(70);

	return (
		<ChessBoard
			FEN="8/8/8/P7/3N4/8/8/4K3 w - - 0 1"
			onChange={() => {}}
			onEndGame={() => {}}
			config={{ squareSize }}
			playerColor="white"
			toggleTurn={false}
		/>
	);
}

export const ChessBoardPawnPromotion: FC = () => {
	const squareSize = useCellSize(70);
	return (
		<InteractiveChessBoard 
			FEN="8/k5PK/8/8/8/8/8/8 w - - 0 1"
			onChange={(data) => {}}
			onEndGame={() => {}}
			config={{ squareSize }}
		/>
	);
}

export const ChessBoardStrangeFEN: FC = () => {
	const squareSize = useCellSize(70);
	return (
        <InteractiveChessBoard 
			FEN="rnbqQBNR/2k2K2/ppppPPPP/8/8/8/8/8 w - - 0 1"
			onChange={(data) => {}}
			onEndGame={() => {}}
			config={{ squareSize }}
		/>
    );
}

export const ChessBoardPaulMorphyOperaGame: FC = () => {
	const squareSize = useCellSize(70);

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
				config={{ squareSize }}
				change={currentMove}
				viewOnly
			/>

			<button className="button" onClick={nextMove}>Next move</button>
		</div>
	);
}

export const ChessBoardScholarsMate: FC = () => {
	const squareSize = useCellSize(70);

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
				config={{ squareSize }}
				change={currentMove}
				viewOnly
			/>

			<button className="button" onClick={nextMove}>Next move</button>
		</div>
	);
}

export const ChessBoardTransformToQueen: FC = () => {
	const squareSize = useCellSize(70);
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
			<InteractiveChessBoard 
				FEN="k7/p7/8/8/8/8/8/7K w - - 0 1"
				onChange={() => {}}
				onEndGame={() => {}}
				config={{ squareSize }}
				change={currentMove}
			/>

			<button className="button" onClick={nextMove}>Next move</button>
		</div>
	);
}
