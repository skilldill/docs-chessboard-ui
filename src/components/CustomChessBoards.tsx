import "react-chessboard-ui/dist/index.css";
import { ChessBoard } from "react-chessboard-ui";
import "./styles.css";

const KingWhitePNG = '/magicPieces/king-white.png';
const KingBlackPNG = '/magicPieces/king-black.png';
const QueenWhitePNG = '/magicPieces/queen-white.png';
const QueenBlackPNG = '/magicPieces/queen-black.png';
const RookWhitePNG = '/magicPieces/rook-white.png';
const RookBlackPNG = '/magicPieces/rook-black.png';
const BishopWhitePNG = '/magicPieces/bishop-white.png';
const BishopBlackPNG = '/magicPieces/bishop-black.png';
const KnightWhitePNG = '/magicPieces/knight-white.png';
const KnightBlackPNG = '/magicPieces/knight-black.png';
const PawnWhitePNG = '/magicPieces/pawn-white.png';
const PawnBlackPNG = '/magicPieces/pawn-black.png';

const useCellSize = (defaultValue: number) => {
	if (typeof window === undefined) return defaultValue;
	if (window.innerWidth <= 460) return 36;
	if (window.innerWidth < 1144) return 44;
	if (window.innerWidth < 1376) return 56;
	return defaultValue;
}

const MAGIC_CHESS_BOARD_CONFIG = {
	squareSize: 70,
	pieceSizePercent: 95,
	lightSquareClassName: "squareWhite",
	darkSquareClassName: "squareBlack",
	arrowColor: "red",
	piecesMap: {
		"pawn-white": (size) => <img width={size} src={PawnWhitePNG} />,
		"pawn-black": (size) => <img width={size} src={PawnBlackPNG} />,
		"knight-white": (size) => <img width={size} src={KnightWhitePNG} />,
		"knight-black": (size) => <img width={size} src={KnightBlackPNG} />,
		"bishop-white": (size) => <img width={size} src={BishopWhitePNG} />,
		"bishop-black": (size) => <img width={size} src={BishopBlackPNG} />,
		"rook-white": (size) => <img width={size} src={RookWhitePNG} />,
		"rook-black": (size) => <img width={size} src={RookBlackPNG} />,
		"queen-white": (size) => <img width={size} src={QueenWhitePNG} />,
		"queen-black": (size) => <img width={size} src={QueenBlackPNG} />,
		"king-white": (size) => <img width={size} src={KingWhitePNG} />,
		"king-black": (size) => <img width={size} src={KingBlackPNG} />
	},
	showMovesTrail: true,
};

export const MagicPiecesChessBoard = () => {
    const squareSize = useCellSize(70);

    return (
        <ChessBoard 
			FEN="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
			onChange={(data) => {}}
			onEndGame={() => {}}
			config={{ ...MAGIC_CHESS_BOARD_CONFIG, squareSize }}
		/>
    )
}