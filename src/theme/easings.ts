export const easeInOutCirc = [0.85, 0, 0.15, 1];
export const easeOutCirc = [0, 0.55, 0.45, 1];
export const cssEaseInOutCirc = `cubic-bezier(0.85, 0, 0.15, 1)`;
export const cssEaseOutExpo = `cubic-bezier(0.16, 1, 0.3, 1)`;

export const easingFunction = (x: number) => 1 - Math.pow(1 - x, 3);
