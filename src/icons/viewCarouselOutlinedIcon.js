import { initIcon } from "./icon.js";

//the url of the view carousel outlined svg; resolved relative to this module
const URL_VIEWCAROUSELOUTLINED = new URL('../../assets/icons/viewCarouselOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a view carousel outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/viewCarouselOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initViewCarouselOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_VIEWCAROUSELOUTLINED }, ...properties);
}

/**
 * Creates a view carousel outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const viewCarouselOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initViewCarouselOutlinedIcon(element, ...properties);
    return element;
}
