import { initIcon } from "./icon.js";

//the url of the switch right outlined svg; resolved relative to this module
const URL_SWITCHRIGHTOUTLINED = new URL('../../assets/icons/switchRightOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a switch right outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/switchRightOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSwitchRightOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'switchRightOutlinedIcon', url: URL_SWITCHRIGHTOUTLINED }, ...properties);
}

/**
 * Creates a switch right outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const switchRightOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSwitchRightOutlinedIcon(element, ...properties);
    return element;
}
