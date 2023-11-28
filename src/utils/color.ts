export function convertColorToRGBA(color: string, alpha: number) {
    if (color[0] === '#') {
        color = color.slice(1);
        if (color.length === 3) {
            color = color
                .split('')
                .map(function (hex) {
                    return hex + hex;
                })
                .join('');
        }
        const decimalColor = parseInt(color, 16);
        const red = (decimalColor >> 16) & 255;
        const green = (decimalColor >> 8) & 255;
        const blue = decimalColor & 255;
        return 'rgba(' + red + ',' + green + ',' + blue + ',' + alpha + ')';
    }

    if (color.indexOf('rgb') !== -1) {
        return color.replace(')', ',' + alpha + ')').replace('rgb', 'rgba');
    }

    return "transparent";
}
