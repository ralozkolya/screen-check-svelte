let context;

export const MAIN_COLORS = [
    '#ff0000', '#00ff00', '#0000ff', '#ffffff', '#000000', '#7f7f7f'
];

export function getColor(i) {
    return MAIN_COLORS[Math.abs(i % MAIN_COLORS.length)];
}

export function toChannels(color) {
    if (!context) {
        const canvas = document.createElement('canvas');
        canvas.width = canvas.height = 1;
        context = canvas.getContext('2d');
    }
    context.fillStyle = color;
    context.fillRect(0, 0, 1, 1);
    return context.getImageData(0, 0, 1, 1).data.slice(0, 3);
}