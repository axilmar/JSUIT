import { initIcon } from "./icon.js";

//the url of the king bed svg; resolved relative to this module
const URL_KINGBED = new URL('../../assets/icons/kingBed.svg', import.meta.url).href;

/**
 * Initializes an icon element as a king bed icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/kingBed.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initKingBedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'kingBedIcon', url: URL_KINGBED }, ...properties);
}

/**
 * Creates a king bed icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const kingBedIcon = (...properties) => {
    const element = document.createElement('div');
    initKingBedIcon(element, ...properties);
    return element;
}
