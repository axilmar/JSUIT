import { initIcon } from "./icon.js";

//the url of the add reaction outlined svg; resolved relative to this module
const URL_ADDREACTIONOUTLINED = new URL('../../assets/icons/addReactionOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an add reaction outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/addReactionOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAddReactionOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'addReactionOutlinedIcon', url: URL_ADDREACTIONOUTLINED }, ...properties);
}

/**
 * Creates an add reaction outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const addReactionOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAddReactionOutlinedIcon(element, ...properties);
    return element;
}
