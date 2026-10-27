import { initIcon } from "./icon.js";

//the url of the people outline svg; resolved relative to this module
const URL_PEOPLEOUTLINE = new URL('../../assets/icons/peopleOutline.svg', import.meta.url).href;

/**
 * Initializes an icon element as a people outline icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/peopleOutline.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPeopleOutlineIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'peopleOutlineIcon', url: URL_PEOPLEOUTLINE }, ...properties);
}

/**
 * Creates a people outline icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const peopleOutlineIcon = (...properties) => {
    const element = document.createElement('div');
    initPeopleOutlineIcon(element, ...properties);
    return element;
}
