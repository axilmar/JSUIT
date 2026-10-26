import { initIcon } from "./icon.js";

//the url of the people outline outlined svg; resolved relative to this module
const URL_PEOPLEOUTLINEOUTLINED = new URL('../../assets/icons/peopleOutlineOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a people outline outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/peopleOutlineOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPeopleOutlineOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PEOPLEOUTLINEOUTLINED }, ...properties);
}

/**
 * Creates a people outline outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const peopleOutlineOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPeopleOutlineOutlinedIcon(element, ...properties);
    return element;
}
