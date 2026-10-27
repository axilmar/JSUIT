import { initIcon } from "./icon.js";

//the url of the baby changing station svg; resolved relative to this module
const URL_BABYCHANGINGSTATION = new URL('../../assets/icons/babyChangingStation.svg', import.meta.url).href;

/**
 * Initializes an icon element as a baby changing station icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/babyChangingStation.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBabyChangingStationIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'babyChangingStationIcon', url: URL_BABYCHANGINGSTATION }, ...properties);
}

/**
 * Creates a baby changing station icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const babyChangingStationIcon = (...properties) => {
    const element = document.createElement('div');
    initBabyChangingStationIcon(element, ...properties);
    return element;
}
