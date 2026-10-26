import { initIcon } from "./icon.js";

//the url of the join right outlined svg; resolved relative to this module
const URL_JOINRIGHTOUTLINED = new URL('../../assets/icons/joinRightOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a join right outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/joinRightOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initJoinRightOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_JOINRIGHTOUTLINED }, ...properties);
}

/**
 * Creates a join right outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const joinRightOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initJoinRightOutlinedIcon(element, ...properties);
    return element;
}
