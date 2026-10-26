import { initIcon } from "./icon.js";

//the url of the people alt svg; resolved relative to this module
const URL_PEOPLEALT = new URL('../../assets/icons/peopleAlt.svg', import.meta.url).href;

/**
 * Initializes an icon element as a people alt icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/peopleAlt.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPeopleAltIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PEOPLEALT }, ...properties);
}

/**
 * Creates a people alt icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const peopleAltIcon = (...properties) => {
    const element = document.createElement('div');
    initPeopleAltIcon(element, ...properties);
    return element;
}
