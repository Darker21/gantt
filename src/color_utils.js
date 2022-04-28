const RGB_REGEX =
    /^^(rgb)(a?)[(]\s*([\d.]+\s*%?)\s*,\s*([\d.]+\s*%?)\s*,\s*([\d.]+\s*%?)\s*(?:,\s*([\d.]+)\s*)?[)]$/;
const HSL_REGEX =
    /^^(hsl)(a?)[(]\s*([\d.]+\s*%?)\s*,\s*([\d.]+\s*%?)\s*,\s*([\d.]+\s*%?)\s*(?:,\s*([\d.]+)\s*)?[)]$/;
const HEX_REGEX = /^^#(?:[A-Fa-f0-9]{3}){1,2}$/;

export default {
    isColor(value) {
        return this.isRGB(value) || this.isHex(value) || this.isHSL(value);
    },

    isRGB(value) {
        return RGB_REGEX.test(value);
    },

    isHSL(value) {
        return HSL_REGEX.test(value);
    },

    isHex(value) {
        return HEX_REGEX.test(value);
    },
};
