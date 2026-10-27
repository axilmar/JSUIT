import { initIcon } from "./icon.js";

//the url of the four g plus mobiledata outlined svg; resolved relative to this module
const URL_FOURGPLUSMOBILEDATAOUTLINED = new URL('../../assets/icons/fourGPlusMobiledataOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a four g plus mobiledata outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fourGPlusMobiledataOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFourGPlusMobiledataOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'fourGPlusMobiledataOutlinedIcon', url: URL_FOURGPLUSMOBILEDATAOUTLINED }, ...properties);
}

/**
 * Creates a four g plus mobiledata outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fourGPlusMobiledataOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFourGPlusMobiledataOutlinedIcon(element, ...properties);
    return element;
}
