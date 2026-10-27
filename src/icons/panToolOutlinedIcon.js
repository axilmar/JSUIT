import { initIcon } from "./icon.js";

//the url of the pan tool outlined svg; resolved relative to this module
const URL_PANTOOLOUTLINED = new URL('../../assets/icons/panToolOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a pan tool outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/panToolOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPanToolOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'panToolOutlinedIcon', url: URL_PANTOOLOUTLINED }, ...properties);
}

/**
 * Creates a pan tool outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const panToolOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPanToolOutlinedIcon(element, ...properties);
    return element;
}
