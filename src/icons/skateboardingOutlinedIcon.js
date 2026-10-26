import { initIcon } from "./icon.js";

//the url of the skateboarding outlined svg; resolved relative to this module
const URL_SKATEBOARDINGOUTLINED = new URL('../../assets/icons/skateboardingOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a skateboarding outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/skateboardingOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSkateboardingOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SKATEBOARDINGOUTLINED }, ...properties);
}

/**
 * Creates a skateboarding outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const skateboardingOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSkateboardingOutlinedIcon(element, ...properties);
    return element;
}
