import { initIcon } from "./icon.js";

//the url of the gas meter svg; resolved relative to this module
const URL_GASMETER = new URL('../../assets/icons/gasMeter.svg', import.meta.url).href;

/**
 * Initializes an icon element as a gas meter icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/gasMeter.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGasMeterIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'gasMeterIcon', url: URL_GASMETER }, ...properties);
}

/**
 * Creates a gas meter icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const gasMeterIcon = (...properties) => {
    const element = document.createElement('div');
    initGasMeterIcon(element, ...properties);
    return element;
}
