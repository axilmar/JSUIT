import { initIcon } from "./icon.js";

//the url of the sports kabaddi outlined svg; resolved relative to this module
const URL_SPORTSKABADDIOUTLINED = new URL('../../assets/icons/sportsKabaddiOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sports kabaddi outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sportsKabaddiOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSportsKabaddiOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'sportsKabaddiOutlinedIcon', url: URL_SPORTSKABADDIOUTLINED }, ...properties);
}

/**
 * Creates a sports kabaddi outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sportsKabaddiOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSportsKabaddiOutlinedIcon(element, ...properties);
    return element;
}
