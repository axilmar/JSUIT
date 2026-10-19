import { initDiv } from "./div.js";
import { loadSVG } from "./utility.js";

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
 * It also gets a boolean property 'stretch' (default false); when true, the SVG is
 * stretched to the element's size, ignoring its aspect ratio.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    defineStretchProperty(element);
    defineUrlProperty(element);
    initDiv(element, ...properties);
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
