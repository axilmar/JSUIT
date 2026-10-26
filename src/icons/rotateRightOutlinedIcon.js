import { initIcon } from "./icon.js";

//the url of the rotate right outlined svg; resolved relative to this module
const URL_ROTATERIGHTOUTLINED = new URL('../../assets/icons/rotateRightOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a rotate right outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/rotateRightOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRotateRightOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ROTATERIGHTOUTLINED }, ...properties);
}

/**
 * Creates a rotate right outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const rotateRightOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRotateRightOutlinedIcon(element, ...properties);
    return element;
}
