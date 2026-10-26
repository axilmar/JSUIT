import { initIcon } from "./icon.js";

//the url of the gas meter outlined svg; resolved relative to this module
const URL_GASMETEROUTLINED = new URL('../../assets/icons/gasMeterOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a gas meter outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/gasMeterOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGasMeterOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_GASMETEROUTLINED }, ...properties);
}

/**
 * Creates a gas meter outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const gasMeterOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initGasMeterOutlinedIcon(element, ...properties);
    return element;
}
