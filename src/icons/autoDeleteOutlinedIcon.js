import { initIcon } from "./icon.js";

//the url of the auto delete outlined svg; resolved relative to this module
const URL_AUTODELETEOUTLINED = new URL('../../assets/icons/autoDeleteOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an auto delete outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/autoDeleteOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAutoDeleteOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'autoDeleteOutlinedIcon', url: URL_AUTODELETEOUTLINED }, ...properties);
}

/**
 * Creates an auto delete outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const autoDeleteOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAutoDeleteOutlinedIcon(element, ...properties);
    return element;
}
