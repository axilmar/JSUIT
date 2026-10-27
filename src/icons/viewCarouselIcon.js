import { initIcon } from "./icon.js";

//the url of the view carousel svg; resolved relative to this module
const URL_VIEWCAROUSEL = new URL('../../assets/icons/viewCarousel.svg', import.meta.url).href;

/**
 * Initializes an icon element as a view carousel icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/viewCarousel.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initViewCarouselIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'viewCarouselIcon', url: URL_VIEWCAROUSEL }, ...properties);
}

/**
 * Creates a view carousel icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const viewCarouselIcon = (...properties) => {
    const element = document.createElement('div');
    initViewCarouselIcon(element, ...properties);
    return element;
}
