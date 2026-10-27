import { initIcon } from "./icon.js";

//the url of the turn right outlined svg; resolved relative to this module
const URL_TURNRIGHTOUTLINED = new URL('../../assets/icons/turnRightOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a turn right outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/turnRightOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTurnRightOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'turnRightOutlinedIcon', url: URL_TURNRIGHTOUTLINED }, ...properties);
}

/**
 * Creates a turn right outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const turnRightOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTurnRightOutlinedIcon(element, ...properties);
    return element;
}
