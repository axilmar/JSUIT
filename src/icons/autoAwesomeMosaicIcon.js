import { initIcon } from "./icon.js";

//the url of the auto awesome mosaic svg; resolved relative to this module
const URL_AUTOAWESOMEMOSAIC = new URL('../../assets/icons/autoAwesomeMosaic.svg', import.meta.url).href;

/**
 * Initializes an icon element as an auto awesome mosaic icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/autoAwesomeMosaic.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAutoAwesomeMosaicIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'autoAwesomeMosaicIcon', url: URL_AUTOAWESOMEMOSAIC }, ...properties);
}

/**
 * Creates an auto awesome mosaic icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const autoAwesomeMosaicIcon = (...properties) => {
    const element = document.createElement('div');
    initAutoAwesomeMosaicIcon(element, ...properties);
    return element;
}
