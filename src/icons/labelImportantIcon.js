import { initIcon } from "./icon.js";

//the url of the label important svg; resolved relative to this module
const URL_LABELIMPORTANT = new URL('../../assets/icons/labelImportant.svg', import.meta.url).href;

/**
 * Initializes an icon element as a label important icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/labelImportant.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLabelImportantIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'labelImportantIcon', url: URL_LABELIMPORTANT }, ...properties);
}

/**
 * Creates a label important icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const labelImportantIcon = (...properties) => {
    const element = document.createElement('div');
    initLabelImportantIcon(element, ...properties);
    return element;
}
