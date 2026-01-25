type MenuRoute = {
    text: string;
    header?: boolean;
    link?: string;
    isUpgrade?: boolean;
    isNew?: boolean;
}

export const MENU_ROUTES: MenuRoute[] = [
    { text: "Documentation", header: true },
    { text: 'Introduction', link: '/docs/introduction' },
    { text: "Get started", link: "/docs/quickStart" },

    { text: "Properties", header: true },
    { text: "FEN", link: "/properties/FEN" },
    { text: "onChange", link: "/properties/onChange" },
    { text: "onEndGame", link: "/properties/onEndGame" },
    { text: "reversed (optional)", link: "/properties/reversed" },
    { text: "change (optional)", link: "/properties/change" },
    { text: "config (optional)", link: "/properties/config", isUpgrade: true },
    { text: "playerColor (optional)", link: "/properties/playerColor" },
    { text: "viewOnly (optional)", link: "/properties/viewOnly" },

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
