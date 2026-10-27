import { initIcon } from "./icon.js";

//the url of the south east outlined svg; resolved relative to this module
const URL_SOUTHEASTOUTLINED = new URL('../../assets/icons/southEastOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a south east outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/southEastOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSouthEastOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'southEastOutlinedIcon', url: URL_SOUTHEASTOUTLINED }, ...properties);
}

/**
 * Creates a south east outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const southEastOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSouthEastOutlinedIcon(element, ...properties);
    return element;
}
