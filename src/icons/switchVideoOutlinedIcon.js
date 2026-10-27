import { initIcon } from "./icon.js";

//the url of the switch video outlined svg; resolved relative to this module
const URL_SWITCHVIDEOOUTLINED = new URL('../../assets/icons/switchVideoOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a switch video outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/switchVideoOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSwitchVideoOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'switchVideoOutlinedIcon', url: URL_SWITCHVIDEOOUTLINED }, ...properties);
}

/**
 * Creates a switch video outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const switchVideoOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSwitchVideoOutlinedIcon(element, ...properties);
    return element;
}
