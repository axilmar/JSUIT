import { initIcon } from "./icon.js";

//the url of the label important outlined svg; resolved relative to this module
const URL_LABELIMPORTANTOUTLINED = new URL('../../assets/icons/labelImportantOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a label important outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/labelImportantOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLabelImportantOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'labelImportantOutlinedIcon', url: URL_LABELIMPORTANTOUTLINED }, ...properties);
}

/**
 * Creates a label important outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const labelImportantOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLabelImportantOutlinedIcon(element, ...properties);
    return element;
}
