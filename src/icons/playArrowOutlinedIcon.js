import { initIcon } from "./icon.js";

//the url of the play arrow outlined svg; resolved relative to this module
const URL_PLAYARROWOUTLINED = new URL('../../assets/icons/playArrowOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a play arrow outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/playArrowOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPlayArrowOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'playArrowOutlinedIcon', url: URL_PLAYARROWOUTLINED }, ...properties);
}

/**
 * Creates a play arrow outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const playArrowOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPlayArrowOutlinedIcon(element, ...properties);
    return element;
}
