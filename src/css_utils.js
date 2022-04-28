export default {
    getCssVariable(
        variable,
        element = document.documentElement,
        defaultValue = ''
    ) {
        var value, elementStyles;

        // Allow query selectors and HTMLElements
        if (typeof element === 'string') {
            element = document.querySelector(element);
        } else if (element instanceof HTMLElement === false) {
            return defaultValue;
        }

        elementStyles = window.getComputedStyle(element) || null;

        if (!variable || !elementStyles) {
            return defaultValue;
        }

        value = elementStyles.getPropertyValue(variable);

        return value;
    },
};
