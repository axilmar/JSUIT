import { initIcon } from "./icon.js";

//the url of the flip to front outlined svg; resolved relative to this module
const URL_FLIPTOFRONTOUTLINED = new URL('../../assets/icons/flipToFrontOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a flip to front outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/flipToFrontOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFlipToFrontOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'flipToFrontOutlinedIcon', url: URL_FLIPTOFRONTOUTLINED }, ...properties);
}

/**
 * Creates a flip to front outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const flipToFrontOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFlipToFrontOutlinedIcon(element, ...properties);
    return element;
}
