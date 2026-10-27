import { initIcon } from "./icon.js";

//the url of the electric bolt svg; resolved relative to this module
const URL_ELECTRICBOLT = new URL('../../assets/icons/electricBolt.svg', import.meta.url).href;

/**
 * Initializes an icon element as an electric bolt icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/electricBolt.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initElectricBoltIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'electricBoltIcon', url: URL_ELECTRICBOLT }, ...properties);
}

/**
 * Creates an electric bolt icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const electricBoltIcon = (...properties) => {
    const element = document.createElement('div');
    initElectricBoltIcon(element, ...properties);
    return element;
}
