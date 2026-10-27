import { initIcon } from "./icon.js";

//the url of the lte plus mobiledata outlined svg; resolved relative to this module
const URL_LTEPLUSMOBILEDATAOUTLINED = new URL('../../assets/icons/ltePlusMobiledataOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a lte plus mobiledata outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/ltePlusMobiledataOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLtePlusMobiledataOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'ltePlusMobiledataOutlinedIcon', url: URL_LTEPLUSMOBILEDATAOUTLINED }, ...properties);
}

/**
 * Creates a lte plus mobiledata outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const ltePlusMobiledataOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLtePlusMobiledataOutlinedIcon(element, ...properties);
    return element;
}
