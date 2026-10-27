import { initIcon } from "./icon.js";

//the url of the castle svg; resolved relative to this module
const URL_CASTLE = new URL('../../assets/icons/castle.svg', import.meta.url).href;

/**
 * Initializes an icon element as a castle icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/castle.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCastleIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'castleIcon', url: URL_CASTLE }, ...properties);
}

/**
 * Creates a castle icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const castleIcon = (...properties) => {
    const element = document.createElement('div');
    initCastleIcon(element, ...properties);
    return element;
}
