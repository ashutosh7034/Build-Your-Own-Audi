export const getAnimate = ({
	initialY = -100,
	initialOpacity = 0,
	finalY = 0,
	finalX = 0,
	finalOpacity = 1,
	initialX = -100,
} = {}) => {
	return {
		hidden: { opacity: initialOpacity, y: initialY, x: initialX },
		visible: { opacity: finalOpacity, y: finalY, x: finalX },
	};
};

export const getViewport = (once = true) => {
	return { once };
};

export const getTransition = ({
	duration = 1,
	delay = 0.5,
	ease = "easeOut",
} = {}) => {
	return { duration, delay, ease };
};
