import { initIcon } from "./icon.js";

//the url of the fork right outlined svg; resolved relative to this module
const URL_FORKRIGHTOUTLINED = new URL('../../assets/icons/forkRightOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fork right outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/forkRightOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initForkRightOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'forkRightOutlinedIcon', url: URL_FORKRIGHTOUTLINED }, ...properties);
}

/**
 * Creates a fork right outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const forkRightOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initForkRightOutlinedIcon(element, ...properties);
    return element;
}
