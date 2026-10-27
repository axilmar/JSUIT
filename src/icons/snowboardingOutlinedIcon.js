import { initIcon } from "./icon.js";

//the url of the snowboarding outlined svg; resolved relative to this module
const URL_SNOWBOARDINGOUTLINED = new URL('../../assets/icons/snowboardingOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a snowboarding outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/snowboardingOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSnowboardingOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'snowboardingOutlinedIcon', url: URL_SNOWBOARDINGOUTLINED }, ...properties);
}

/**
 * Creates a snowboarding outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const snowboardingOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSnowboardingOutlinedIcon(element, ...properties);
    return element;
}
