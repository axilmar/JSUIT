import { initIcon } from "./icon.js";

//the url of the local see svg; resolved relative to this module
const URL_LOCALSEE = new URL('../../assets/icons/localSee.svg', import.meta.url).href;

/**
 * Initializes an icon element as a local see icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/localSee.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocalSeeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'localSeeIcon', url: URL_LOCALSEE }, ...properties);
}

/**
 * Creates a local see icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const localSeeIcon = (...properties) => {
    const element = document.createElement('div');
    initLocalSeeIcon(element, ...properties);
    return element;
}
