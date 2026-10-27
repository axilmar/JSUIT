import { initIcon } from "./icon.js";

//the url of the rotate left outlined svg; resolved relative to this module
const URL_ROTATELEFTOUTLINED = new URL('../../assets/icons/rotateLeftOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a rotate left outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/rotateLeftOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRotateLeftOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'rotateLeftOutlinedIcon', url: URL_ROTATELEFTOUTLINED }, ...properties);
}

/**
 * Creates a rotate left outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const rotateLeftOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRotateLeftOutlinedIcon(element, ...properties);
    return element;
}
