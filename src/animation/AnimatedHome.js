export const leftElem = (isMobile) => ({
    hidden: {
        y: "50%",
        x: "50%",
        transform: "translate(-50%, -50%) translate(-950px, -40px)",
        opacity: 0,
    },
    visible: {
        y: "50%",
        x: "50%",
        transform: isMobile
            ? "translate(-50%, -50%) translate(-280px, -85px)"
            : "translate(-50%, -50%) translate(-235px, -40px)",
        opacity: 1,
    },
});

export const rightElem = (isMobile) => ({
    hidden: {
        y: "50%",
        x: "50%",
        transform: "translate(-50%, -50%) translate(840px, 35px)",
        opacity: 0,
    },
    visible: {
        y: "50%",
        x: "50%",
        transform: isMobile
        ? "translate(-50%, -50%) translate(260px, -40px)"
        : "translate(-50%, -50%) translate(340px, 35px)",
        opacity: 1,
    },
});

export const homeMainDesc = {
    hidden: {
        x: -500,
    },
    visible: {
        x: 0,
    },
};

export const homeMainTitle = {
    hidden: {
        y: -400,
    },
    visible: {
        y: 0,
    },
};

export const homeMainProducts = {
    hidden: {
        x: 570,
    },
    visible: {
        x: 0,
    },
};

export const homeMainRobot = {
    hidden: {
        y: 715,
    },
    visible: {
        y: 0,
    },
};

export const prompts = {
    hidden: {
        x: -1400,
    },
    visible: custom => ({
        x: 0,

    }),
};

export const homeMarketplace = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
};