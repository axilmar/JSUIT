import { initIcon } from "./icon.js";

//the url of the baby changing station outlined svg; resolved relative to this module
const URL_BABYCHANGINGSTATIONOUTLINED = new URL('../../assets/icons/babyChangingStationOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a baby changing station outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/babyChangingStationOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBabyChangingStationOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'babyChangingStationOutlinedIcon', url: URL_BABYCHANGINGSTATIONOUTLINED }, ...properties);
}

/**
 * Creates a baby changing station outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const babyChangingStationOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBabyChangingStationOutlinedIcon(element, ...properties);
    return element;
}
