import { initIcon } from "./icon.js";

//the urls of the close svgs, by variant; resolved relative to this module
const VARIANT_URLS = {
    standard: new URL('../../assets/icons/x.svg', import.meta.url).href,
    outlined: new URL('../../assets/icons/xOutlined.svg', import.meta.url).href,
    filled: new URL('../../assets/icons/xFilled.svg', import.meta.url).href
};

//defines the property 'variant'
const defineVariantProperty = (element) => {
    let variant = 'standard';

    Object.defineProperty(element, 'variant', {
        configurable: true,
        enumerable: true,
        get: () => variant,
        set: (value) => {
            console.assert(Object.hasOwn(VARIANT_URLS, value));
            variant = Object.hasOwn(VARIANT_URLS, value) ? value : 'standard';
            element.url = VARIANT_URLS[variant];
        }
    });
};

/**
 * Initializes an icon element as a close icon.
 * 
 * It invokes the function `initIcon(element, ...properties)`.
 * 
 * The element displays the svg `assets/icons/x.svg`, MUI's Close, for close buttons; a `url` property overrides it.
 * 
 * The element gets the property 'variant', which accepts 'standard' (the default, a plain x: `assets/icons/x.svg`), 'outlined' (an x in a circle outline:
 * `assets/icons/xOutlined.svg`, MUI's HighlightOff) and 'filled' (an x cut out of a filled circle: `assets/icons/xFilled.svg`, MUI's Cancel). Setting it sets the url.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCloseIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    defineVariantProperty(element);
    initIcon(element, { additionalClassName: 'closeIcon', url: VARIANT_URLS.standard }, ...properties);
}

/**
 * Creates a close icon.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const closeIcon = (...properties) => {
    const element = document.createElement('div');
    initCloseIcon(element, ...properties);
    return element;
}
