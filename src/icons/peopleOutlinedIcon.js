import { initIcon } from "./icon.js";

//the url of the people outlined svg; resolved relative to this module
const URL_PEOPLEOUTLINED = new URL('../../assets/icons/peopleOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a people outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/peopleOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPeopleOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'peopleOutlinedIcon', url: URL_PEOPLEOUTLINED }, ...properties);
}

/**
 * Creates a people outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const peopleOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPeopleOutlinedIcon(element, ...properties);
    return element;
}
