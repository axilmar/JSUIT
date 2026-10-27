import { initIcon } from "./icon.js";

//the url of the auto delete svg; resolved relative to this module
const URL_AUTODELETE = new URL('../../assets/icons/autoDelete.svg', import.meta.url).href;

/**
 * Initializes an icon element as an auto delete icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/autoDelete.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAutoDeleteIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'autoDeleteIcon', url: URL_AUTODELETE }, ...properties);
}

/**
 * Creates an auto delete icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const autoDeleteIcon = (...properties) => {
    const element = document.createElement('div');
    initAutoDeleteIcon(element, ...properties);
    return element;
}
