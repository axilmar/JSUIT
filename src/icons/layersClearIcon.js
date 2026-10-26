import { initIcon } from "./icon.js";

//the url of the layers clear svg; resolved relative to this module
const URL_LAYERSCLEAR = new URL('../../assets/icons/layersClear.svg', import.meta.url).href;

/**
 * Initializes an icon element as a layers clear icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/layersClear.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLayersClearIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LAYERSCLEAR }, ...properties);
}

/**
 * Creates a layers clear icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const layersClearIcon = (...properties) => {
    const element = document.createElement('div');
    initLayersClearIcon(element, ...properties);
    return element;
}
