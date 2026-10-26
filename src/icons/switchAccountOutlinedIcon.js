import { initIcon } from "./icon.js";

//the url of the switch account outlined svg; resolved relative to this module
const URL_SWITCHACCOUNTOUTLINED = new URL('../../assets/icons/switchAccountOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a switch account outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/switchAccountOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSwitchAccountOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SWITCHACCOUNTOUTLINED }, ...properties);
}

/**
 * Creates a switch account outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const switchAccountOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSwitchAccountOutlinedIcon(element, ...properties);
    return element;
}
