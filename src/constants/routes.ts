type MenuRoute = {
    text: string;
    header?: boolean;
    link?: string;
    isUpgrade?: boolean;
    isNew?: boolean;
    isOptional?: boolean;
}

export const MENU_ROUTES: MenuRoute[] = [
    { text: "Documentation", header: true },
    { text: 'Introduction', link: '/docs/introduction' },
    { text: "Get started", link: "/docs/quickStart" },

    { text: "Properties", header: true },
    { text: "FEN", link: "/properties/FEN" },
    { text: "onChange", link: "/properties/onChange" },
    { text: "onEndGame", link: "/properties/onEndGame" },
    { text: "onClick", link: "/properties/onClick", isOptional: true },
    { text: "reversed", link: "/properties/reversed", isOptional: true },
    { text: "change", link: "/properties/change", isOptional: true },
    { text: "arrows", link: "/properties/arrows", isOptional: true },
    { text: "config", link: "/properties/config", isOptional: true },
    { text: "playerColor", link: "/properties/playerColor", isOptional: true },
    { text: "toggleTurn", link: "/properties/toggleTurn", isOptional: true, isNew: true },
    { text: "viewOnly", link: "/properties/viewOnly", isOptional: true },

    { text: "Examples", header: true },
    { text: "Custom FEN", link: "/examples/customFen" },
    { text: "Reversing board", link: "/examples/reversingBoard" },
    { text: "Pawn promotion", link: "/examples/pawnPromotion" },
    { text: "Customization", link: "/examples/customization" },

    { text: "Chess Games", header: true },
    { text: "Scholar's mate", link: "/chessGames/scholars-mate" },
    { text: "Paul Morphy Opera Game", link: "/chessGames/morphy-opera-game" },
    { text: "Pawn transform to queen", link: "/chessGames/pawn-transform-to-queen" },
];
