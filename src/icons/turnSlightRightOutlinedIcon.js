import { initIcon } from "./icon.js";

//the url of the turn slight right outlined svg; resolved relative to this module
const URL_TURNSLIGHTRIGHTOUTLINED = new URL('../../assets/icons/turnSlightRightOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a turn slight right outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/turnSlightRightOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTurnSlightRightOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'turnSlightRightOutlinedIcon', url: URL_TURNSLIGHTRIGHTOUTLINED }, ...properties);
}

/**
 * Creates a turn slight right outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const turnSlightRightOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTurnSlightRightOutlinedIcon(element, ...properties);
    return element;
}
