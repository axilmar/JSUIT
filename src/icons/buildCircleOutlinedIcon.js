import { initIcon } from "./icon.js";

//the url of the build circle outlined svg; resolved relative to this module
const URL_BUILDCIRCLEOUTLINED = new URL('../../assets/icons/buildCircleOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a build circle outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/buildCircleOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBuildCircleOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BUILDCIRCLEOUTLINED }, ...properties);
}

/**
 * Creates a build circle outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const buildCircleOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBuildCircleOutlinedIcon(element, ...properties);
    return element;
}
