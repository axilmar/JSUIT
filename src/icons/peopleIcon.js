import { initIcon } from "./icon.js";

//the url of the people svg; resolved relative to this module
const URL_PEOPLE = new URL('../../assets/icons/people.svg', import.meta.url).href;

/**
 * Initializes an icon element as a people icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/people.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPeopleIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'peopleIcon', url: URL_PEOPLE }, ...properties);
}

/**
 * Creates a people icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const peopleIcon = (...properties) => {
    const element = document.createElement('div');
    initPeopleIcon(element, ...properties);
    return element;
}
