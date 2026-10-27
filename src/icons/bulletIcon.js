import { initIcon } from "./icon.js";

//the url of the bullet svg; resolved relative to this module
const BULLET_URL = new URL('../../assets/icons/bullet.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bullet icon.
 * 
 * It invokes the function `initIcon(element, ...properties)`.
 * 
 * The element displays the svg `assets/icons/bullet.svg`; a `url` property overrides it.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBulletIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'bulletIcon', url: BULLET_URL }, ...properties);
}

/**
 * Creates a bullet icon.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const bulletIcon = (...properties) => {
    const element = document.createElement('div');
    initBulletIcon(element, ...properties);
    return element;
}
