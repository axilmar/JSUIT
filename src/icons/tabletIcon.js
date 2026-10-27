import { initIcon } from "./icon.js";

//the url of the tablet svg; resolved relative to this module
const URL_TABLET = new URL('../../assets/icons/tablet.svg', import.meta.url).href;

/**
 * Initializes an icon element as a tablet icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/tablet.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTabletIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'tabletIcon', url: URL_TABLET }, ...properties);
}

/**
 * Creates a tablet icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const tabletIcon = (...properties) => {
    const element = document.createElement('div');
    initTabletIcon(element, ...properties);
    return element;
}
