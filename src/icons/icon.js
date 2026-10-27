import { initDiv } from "../html/div.js";
import { loadSVG, adoptStyleSheet, defineDisplaySizeProperty } from "../utility/utility.js";

import iconStyleSheet from './icon.css' with { type: 'css' };

adoptStyleSheet(iconStyleSheet);

//applies the stretch setting to the svg currently in the element
const applyStretch = (element, stretch) => {
    const svg = element.querySelector('svg');
    if (!svg) {
        return;
    }
    if (stretch) {
        svg.setAttribute('preserveAspectRatio', 'none');
    }
    else {
        svg.removeAttribute('preserveAspectRatio');
    }
};

//defines the property 'stretch'
const defineStretchProperty = (element) => {
    let stretch = false;

    Object.defineProperty(element, 'stretch', {
        configurable: true,
        enumerable: true,
        get: () => stretch,
        set: (value) => {
            stretch = !!value;
            applyStretch(element, stretch);
        }
    });
};

//the custom property that carries the fill color to the svg; an svg uses it as in `fill: var(--icon-fill-color, currentColor)`
const FILL_COLOR_PROPERTY = '--icon-fill-color';

//defines the property 'fillColor'
const defineFillColorProperty = (element) => {
    let fillColor = '';

    Object.defineProperty(element, 'fillColor', {
        configurable: true,
        enumerable: true,
        get: () => fillColor,
        set: (value) => {
            console.assert(value === null || value === undefined || typeof value === 'string');
            fillColor = value ?? '';
            if (fillColor) {
                element.style.setProperty(FILL_COLOR_PROPERTY, fillColor);
            }
            else {
                element.style.removeProperty(FILL_COLOR_PROPERTY);
            }
        }
    });
};

//defines the property 'url'
const defineUrlProperty = (element) => {
    let url;

    Object.defineProperty(element, 'url', {
        configurable: true,
        enumerable: true,
        get: () => url,
        set: async (newUrl) => {
            url = newUrl;
            const svg = await loadSVG(newUrl);

            //ignore the result if the url changed while loading or loading failed
            if (url === newUrl && svg !== undefined) {
                element.innerHTML = svg;
                applyStretch(element, element.stretch);
            }
        }
    });
};

/**
 * Initializes an icon element.
 * 
 * It invokes the function `initDiv(element, ...properties)`.
 * 
 * The element gets a property 'url'; when set, the SVG at that url is loaded
 * with `loadSVG` and set as the inner html of the element.
 * 
 * The element gets the class 'icon' by default, and a property 'displaySize', which accepts 'small' (20px), 'medium'
 * (24px, the default) and 'large' (35px), the sizes of MUI's SvgIcon. An icon inside a button takes the size of the button instead.
 * 
 * It also gets a boolean property 'stretch' (default false); when true, the SVG is
 * stretched to the element's size, ignoring its aspect ratio.
 * 
 * It also gets a string property 'fillColor' (default empty); when it is not empty, it is made available to the SVG as the
 * css custom property `--icon-fill-color`; an SVG that fills its shapes with `var(--icon-fill-color, currentColor)`,
 * like `assets/icons/star.svg`, is filled with that color, otherwise with the current color.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    defineStretchProperty(element);
    defineFillColorProperty(element);
    defineUrlProperty(element);
    initDiv(element, { additionalClassName: 'icon' }, ...properties);
}

/**
 * Creates an icon element.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const icon = (...properties) => {
    const element = document.createElement('div');
    initIcon(element, ...properties);
    return element;
}
