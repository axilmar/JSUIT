import { initIcon } from "./icon.js";

//the url of the woman2 svg; resolved relative to this module
const URL_WOMAN2 = new URL('../../assets/icons/woman2.svg', import.meta.url).href;

/**
 * Initializes an icon element as a woman2 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/woman2.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWoman2Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'woman2Icon', url: URL_WOMAN2 }, ...properties);
}

/**
 * Creates a woman2 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const woman2Icon = (...properties) => {
    const element = document.createElement('div');
    initWoman2Icon(element, ...properties);
    return element;
}
