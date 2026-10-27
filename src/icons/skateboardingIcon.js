import { initIcon } from "./icon.js";

//the url of the skateboarding svg; resolved relative to this module
const URL_SKATEBOARDING = new URL('../../assets/icons/skateboarding.svg', import.meta.url).href;

/**
 * Initializes an icon element as a skateboarding icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/skateboarding.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSkateboardingIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'skateboardingIcon', url: URL_SKATEBOARDING }, ...properties);
}

/**
 * Creates a skateboarding icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const skateboardingIcon = (...properties) => {
    const element = document.createElement('div');
    initSkateboardingIcon(element, ...properties);
    return element;
}
