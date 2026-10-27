import { initIcon } from "./icon.js";

//the url of the switch left outlined svg; resolved relative to this module
const URL_SWITCHLEFTOUTLINED = new URL('../../assets/icons/switchLeftOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a switch left outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/switchLeftOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSwitchLeftOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'switchLeftOutlinedIcon', url: URL_SWITCHLEFTOUTLINED }, ...properties);
}

/**
 * Creates a switch left outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const switchLeftOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSwitchLeftOutlinedIcon(element, ...properties);
    return element;
}
