import { initIcon } from "./icon.js";

//the url of the grid goldenratio outlined svg; resolved relative to this module
const URL_GRIDGOLDENRATIOOUTLINED = new URL('../../assets/icons/gridGoldenratioOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a grid goldenratio outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/gridGoldenratioOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGridGoldenratioOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'gridGoldenratioOutlinedIcon', url: URL_GRIDGOLDENRATIOOUTLINED }, ...properties);
}

/**
 * Creates a grid goldenratio outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const gridGoldenratioOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initGridGoldenratioOutlinedIcon(element, ...properties);
    return element;
}
