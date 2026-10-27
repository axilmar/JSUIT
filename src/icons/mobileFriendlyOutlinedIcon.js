import { initIcon } from "./icon.js";

//the url of the mobile friendly outlined svg; resolved relative to this module
const URL_MOBILEFRIENDLYOUTLINED = new URL('../../assets/icons/mobileFriendlyOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mobile friendly outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/mobileFriendlyOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMobileFriendlyOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'mobileFriendlyOutlinedIcon', url: URL_MOBILEFRIENDLYOUTLINED }, ...properties);
}

/**
 * Creates a mobile friendly outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const mobileFriendlyOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMobileFriendlyOutlinedIcon(element, ...properties);
    return element;
}
