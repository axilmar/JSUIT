import { initIcon } from "./icon.js";

//the url of the people alt outlined svg; resolved relative to this module
const URL_PEOPLEALTOUTLINED = new URL('../../assets/icons/peopleAltOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a people alt outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/peopleAltOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPeopleAltOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PEOPLEALTOUTLINED }, ...properties);
}

/**
 * Creates a people alt outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const peopleAltOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPeopleAltOutlinedIcon(element, ...properties);
    return element;
}
