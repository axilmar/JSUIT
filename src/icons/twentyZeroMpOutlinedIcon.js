import { initIcon } from "./icon.js";

//the url of the twenty zero mp outlined svg; resolved relative to this module
const URL_TWENTYZEROMPOUTLINED = new URL('../../assets/icons/twentyZeroMpOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a twenty zero mp outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/twentyZeroMpOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTwentyZeroMpOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'twentyZeroMpOutlinedIcon', url: URL_TWENTYZEROMPOUTLINED }, ...properties);
}

/**
 * Creates a twenty zero mp outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const twentyZeroMpOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTwentyZeroMpOutlinedIcon(element, ...properties);
    return element;
}
