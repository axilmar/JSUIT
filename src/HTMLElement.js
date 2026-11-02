import './init.js';
import { assert, isFunction } from './utility.js';

/******************************************************************************
    PUBLIC
 ******************************************************************************/

/**
 * Sets up an existing element from the given components;
 * the components are handled as in {@link createHTMLElement}.
 *
 * It is meant to be called from the constructors of classes derived from HTMLElement.
 * Unlike {@link setHTMLElement}, it does not return the element.
 *
 * Before the components are processed, the element gets a `visible` property,
 * which is the opposite of the `hidden` property (`visible = true` is the same as `hidden = false`),
 * unless the element already has a property with that name.
 * Elements that have a `disabled` property (buttons, inputs, selects etc) also get an `enabled` property,
 * which is the opposite of `disabled`, under the same condition.
 * The element also gets two tooltip properties, both initially null:
 * - `tooltipElement`: the element used for the tooltip.
 * - `tooltip`: the value to display as the tooltip. Setting it updates the tooltip element:
 *   a non-empty value (anything other than null, undefined and '') replaces the children of the tooltip element;
 *   if there is no tooltip element, a default one is created, with a bottom arrow and MUI style.
 *   An empty value removes the children of the tooltip element and removes the element from the screen.
 *
 * While the mouse is over the element, its tooltip element, if it exists and has content, is shown:
 * it is added to the body, centered horizontally over the mouse position and above it,
 * and it follows the mouse until the mouse leaves the element, at which point it is removed from the screen.
 * If it does not fit above the mouse position, it is shown below it, and it is always kept inside the window;
 * the arrow of the default tooltip element moves to the top when the tooltip is below the mouse position,
 * and keeps pointing at the mouse position when the tooltip is shifted to fit in the window.
 * While shown, the tooltip element is given `position: fixed`, a z-index, `pointer-events: none`
 * and a `transform` that moves it; any transform it had is replaced.
 *
 * Since the properties are defined first, `visible`, `enabled`, `tooltip` and `tooltipElement`
 * can be used in a property bag.
 *
 * @param {HTMLElement} element the element to set up.
 * @param {...*} components the components to set the element up from.
 * @throws {Error} if the element is not an instance of HTMLElement.
 */
export const initHTMLElement = (element, ...components) => {
    assert(element instanceof HTMLElement, "Value in 'element' argument is not an instance of HTMLElement.");
    defineVisibleProperty(element);
    defineEnabledProperty(element);
    defineTooltipProperties(element);
    setHTMLElementFromComponentArray(element, components);
}

/**
 * Creates an element and sets it up from the given components.
 *
 * Each component is handled according to its type:
 * - a property bag: its properties are assigned to the element's properties (see {@link HTMLElement_setProperty}).
 * - an array: its items are handled as components, recursively.
 * - a function: it is invoked with the element; its result is ignored.
 * - anything else (DOM nodes, strings, numbers, booleans, null, undefined, dates etc):
 *   it is appended to the element; non-nodes are appended as text,
 *   so `null` and `undefined` appear as the text 'null' and 'undefined'.
 *
 * A property bag is an object literal, an object created with `Object.create`,
 * or an instance of a user-defined class; objects created by the engine
 * (arrays, dates, maps, regular expressions, URLs, DOM nodes etc) are not property bags.
 * Inherited enumerable keys are used as well as own ones.
 *
 * @example
 * const panel = createHTMLElement('div',
 *     { className: 'panel', style: { color: 'red', '--gap': '4px' } },
 *     createHTMLElement('h1', 'Title'),
 *     [createHTMLElement('p', 'one'), createHTMLElement('p', 'two')],
 *     (el) => el.setAttribute('role', 'region'));
 *
 * @param {string} tag the tag name of the element to create.
 * @param {...*} components the components to set the element up from.
 * @returns {HTMLElement} the new element.
 * @throws {Error} if the tag does not create an instance of HTMLElement.
 */
export const createHTMLElement = (tag, ...components) => {
    const element = document.createElement(tag);
    initHTMLElement(element, ...components);
    return element;
}

/**
 * Sets up an existing element from the given components;
 * the components are handled as in {@link createHTMLElement}.
 *
 * Components that append (nodes, text, arrays of them) add to the element's existing children.
 *
 * @param {HTMLElement} element the element to set up.
 * @param {...*} components the components to set the element up from.
 * @returns {HTMLElement} the element.
 * @throws {Error} if the element is not an instance of HTMLElement.
 */
export const setHTMLElement = (element, ...components) => {
    assert(element instanceof HTMLElement, "Value in 'element' argument is not an instance of HTMLElement.");
    setHTMLElementFromComponentArray(element, components);
    return element;
}

/**
 * The default implementation of the setProperty method of an element;
 * it is used for each key of a property bag, unless the element has a method named `setProperty`,
 * in which case that method is called instead.
 * A class derived from HTMLElement can therefore define `setProperty(key, value)`
 * to handle some keys on its own, and delegate the rest to this function
 * with `HTMLElement_setProperty.call(this, key, value)`.
 *
 * The value is handled according to its type and the type of the element's current value for the key:
 * - a property bag, if the current value is an element:
 *   the properties of the bag are set on that element, as with a property bag passed to {@link createHTMLElement}.
 * - a property bag, if the current value is a DOMTokenList (`classList`, `part`, `relList`, `sandbox`):
 *   the tokens are replaced with the keys of the bag that have truthy values.
 * - a property bag, if the current value is any other object (`style`, `dataset` etc):
 *   the properties of the bag are assigned to the properties of that object, instead of replacing it;
 *   keys starting with `--` are set as CSS custom properties, which works only on style objects.
 * - an array, if the current value is an element:
 *   the element is set up from the array, as if it was passed to {@link createHTMLElement};
 *   children are appended to the existing ones.
 * - an array, if the current value is a DOMTokenList: the tokens are replaced with the truthy items of the array.
 * - anything else, including an element (which replaces the current element): the value is assigned to the property.
 *
 * Assigning a string to a DOMTokenList property also replaces its tokens;
 * all the forms are therefore consistent.
 *
 * @this {HTMLElement}
 * @param {string} key the name of the property.
 * @param {*} value the value of the property.
 * @throws {Error} if the key starts with `--`, since custom properties can be set only through `style`.
 */
export function HTMLElement_setProperty(key, value) {
    //custom properties are set on style objects only
    assert(!isCustomProperty(key), customPropertyMessage(key));

    if (isPropertyBag(value)) {
        //the current value is read only when the value is a property bag or an array,
        //since reading some properties (e.g. innerText) can be costly
        const currentValue = this[key];

        //set the properties of the element behind the property from the bag
        if (currentValue instanceof HTMLElement) {
            setHTMLElementFromPropertyBag(currentValue, value);
            return;
        }

        //replace the tokens with the keys that have truthy values
        if (currentValue instanceof DOMTokenList) {
            currentValue.value = getTruthyKeys(value).join(' ');
            return;
        }

        //set the properties of the object (style, dataset etc) from the bag
        if (isAssignableObject(currentValue)) {
            setObjectFromPropertyBag(currentValue, value);
            return;
        }
    }

    if (Array.isArray(value)) {
        const currentValue = this[key];

        //set up the element behind the property from the array
        if (currentValue instanceof HTMLElement) {
            setHTMLElementFromComponentArray(currentValue, value);
            return;
        }

        //replace the tokens with the truthy items
        if (currentValue instanceof DOMTokenList) {
            currentValue.value = value.filter(Boolean).join(' ');
            return;
        }
    }

    //set the property from the value
    this[key] = value;
}

/******************************************************************************
    PRIVATE
 ******************************************************************************/

//defines a boolean property on an element, which is the opposite of another boolean property of the element;
//an existing property with the same name (e.g. defined by a derived class) is left alone.
const defineOppositeProperty = (element, name, oppositeName) => {
    if (name in element) {
        return;
    }

    Object.defineProperty(element, name, {
        configurable: true,
        get() {
            return !this[oppositeName];
        },
        set(value) {
            this[oppositeName] = !value;
        }
    });
}

//defines the visible property of an element, which is the opposite of the hidden property.
const defineVisibleProperty = (element) => {
    defineOppositeProperty(element, 'visible', 'hidden');
}

//defines the enabled property of an element, which is the opposite of the disabled property;
//it is defined only for elements that have a disabled property.
const defineEnabledProperty = (element) => {
    if ('disabled' in element) {
        defineOppositeProperty(element, 'enabled', 'disabled');
    }
}

//the background color of the default tooltip element and of its arrow.
const tooltipBackgroundColor = 'rgba(97, 97, 97, 0.92)';

//defines the tooltipElement and tooltip properties of an element, both initially null;
//existing properties with the same names (e.g. defined by a derived class) are left alone.
const defineTooltipProperties = (element) => {
    if ('tooltipElement' in element || 'tooltip' in element) {
        return;
    }

    Object.defineProperty(element, 'tooltipElement', {
        configurable: true,
        writable: true,
        value: null
    });

    //the value of the tooltip property
    let tooltip = null;

    //the default tooltip element and its arrow, created the first time they are needed
    let defaultTooltipElement = null;
    let defaultArrowElement = null;

    Object.defineProperty(element, 'tooltip', {
        configurable: true,

        get() {
            return tooltip;
        },

        set(value) {
            //set the property value
            tooltip = value;

            //update the tooltip element
            const tooltipElement = this.tooltipElement;
            assert(tooltipElement === null || tooltipElement instanceof HTMLElement,
                "Value of 'tooltipElement' is neither null nor an instance of HTMLElement.");

            //empty value: clear the tooltip element and remove it from the screen
            if (isEmptyTooltip(value)) {
                if (tooltipElement) {
                    tooltipElement.replaceChildren();
                    if (tooltipElement.isConnected) {
                        tooltipElement.remove();
                    }
                }
                return;
            }

            //existing tooltip element: replace its children with the value;
            //the default tooltip element keeps its arrow
            if (tooltipElement) {
                if (tooltipElement === defaultTooltipElement) {
                    tooltipElement.replaceChildren(value, defaultArrowElement);
                }
                else {
                    tooltipElement.replaceChildren(value);
                }
                return;
            }

            //no tooltip element: create the default one
            ({ tooltipElement: defaultTooltipElement, arrowElement: defaultArrowElement } = createDefaultTooltipElement());
            defaultTooltipElement.replaceChildren(value, defaultArrowElement);
            tooltipArrows.set(defaultTooltipElement, defaultArrowElement);
            this.tooltipElement = defaultTooltipElement;
        }
    });

    //show the tooltip element while the element is hovered
    addTooltipHover(element);
}

//the distance, in pixels, between the mouse position and the edge of the tooltip element that is closest to it;
//it leaves room for the arrow of the default tooltip element.
const tooltipOffset = 12;

//the height, in pixels, of the mouse cursor below its position;
//it is added to the offset when the tooltip element is shown below the mouse position.
const tooltipCursorHeight = 16;

//the minimum distance, in pixels, between a tooltip element and the edges of the window.
const tooltipViewportMargin = 4;

//the minimum distance, in pixels, between the center of the arrow and the sides of the default tooltip element.
const tooltipArrowMargin = 8;

//the arrows of the default tooltip elements, by tooltip element.
const tooltipArrows = new WeakMap();

//the z-index of the tooltip element while it is shown; it is the same as the one of MUI tooltips.
const tooltipZIndex = '1500';

//makes the tooltip element of an element appear while the element is hovered,
//centered horizontally over the mouse position and above it;
//the tooltip element follows the mouse until the mouse leaves the element.
const addTooltipHover = (element) => {
    //moves the tooltip element, if it is shown
    const onMouseMove = (event) => {
        positionTooltipElement(element.tooltipElement, event);
    }

    //the mouse enters the element: show the tooltip element
    element.addEventListener('mouseenter', (event) => {
        showTooltipElement(element.tooltipElement, event);
        element.addEventListener('mousemove', onMouseMove);
    });

    //the mouse leaves the element: hide the tooltip element
    element.addEventListener('mouseleave', () => {
        element.removeEventListener('mousemove', onMouseMove);
        hideTooltipElement(element.tooltipElement);
    });
}

//shows a tooltip element at the mouse position;
//nothing is shown if there is no tooltip element or if it has no content.
const showTooltipElement = (tooltipElement, event) => {
    if (!tooltipElement || !tooltipElement.hasChildNodes()) {
        return;
    }

    //the tooltip element is positioned relative to the window, from its top left corner,
    //and must not get in the way of the mouse;
    //it is moved with a transform, so that its size does not depend on its position
    setHTMLElement(tooltipElement, {
        style: {
            position: 'fixed',
            left: '0',
            top: '0',
            zIndex: tooltipZIndex,
            pointerEvents: 'none'
        }
    });

    document.body.append(tooltipElement);
    positionTooltipElement(tooltipElement, event);
}

//places a shown tooltip element: centered horizontally over the mouse position and above it;
//if it does not fit above the mouse position, it is placed below it;
//it is also kept inside the window, in which case its arrow keeps pointing at the mouse position.
const positionTooltipElement = (tooltipElement, event) => {
    if (!tooltipElement || !tooltipElement.isConnected) {
        return;
    }

    const { width, height } = tooltipElement.getBoundingClientRect();
    const windowWidth = document.documentElement.clientWidth;
    const windowHeight = document.documentElement.clientHeight;

    //centered horizontally, and kept inside the window
    const x = clamp(event.clientX - width / 2, tooltipViewportMargin, windowWidth - width - tooltipViewportMargin);

    //above the mouse position; if it does not fit, below it
    let y = event.clientY - height - tooltipOffset;
    const isBelow = y < tooltipViewportMargin;
    if (isBelow) {
        y = event.clientY + tooltipCursorHeight + tooltipOffset;
    }
    y = clamp(y, tooltipViewportMargin, windowHeight - height - tooltipViewportMargin);

    //the style is assigned directly, since this runs on every mouse move
    tooltipElement.style.transform = `translate(${x}px, ${y}px)`;

    //the default tooltip element has an arrow, which points at the mouse position
    const arrowElement = tooltipArrows.get(tooltipElement);
    if (arrowElement) {
        positionTooltipArrow(arrowElement, event.clientX - x, width, isBelow);
    }
}

//places the arrow of the default tooltip element, at the bottom of the tooltip element if it is above the mouse position,
//or at its top if it is below; arrowX is the horizontal position of the mouse, relative to the tooltip element.
const positionTooltipArrow = (arrowElement, arrowX, tooltipWidth, isBelow) => {
    //the arrow stays away from the rounded corners
    const centerX = clamp(arrowX, tooltipArrowMargin, tooltipWidth - tooltipArrowMargin);
    arrowElement.style.left = `calc(${centerX}px - 0.5em)`;

    //the rotated square inside the arrow is clipped by the arrow, so that it looks like a triangle
    const squareElement = arrowElement.firstElementChild;

    if (isBelow) {
        arrowElement.style.top = '0';
        arrowElement.style.bottom = 'auto';
        arrowElement.style.marginTop = '-0.71em';
        arrowElement.style.marginBottom = '0';
        squareElement.style.transformOrigin = '0 100%';
    }
    else {
        arrowElement.style.top = 'auto';
        arrowElement.style.bottom = '0';
        arrowElement.style.marginTop = '0';
        arrowElement.style.marginBottom = '-0.71em';
        squareElement.style.transformOrigin = '100% 0';
    }
}

//limits a value to a range; if the range is empty, the minimum wins.
const clamp = (value, min, max) => {
    return Math.max(min, Math.min(value, max));
}

//removes a tooltip element from the screen, if it is shown.
const hideTooltipElement = (tooltipElement) => {
    if (tooltipElement && tooltipElement.isConnected) {
        tooltipElement.remove();
    }
}

//checks if a tooltip value is empty.
const isEmptyTooltip = (value) => {
    return value === null || value === undefined || value === '';
}

//creates the default tooltip element, in MUI style, with an arrow at the bottom;
//the arrow is a real child element, because pseudo-elements are not used.
const createDefaultTooltipElement = () => {
    //the arrow is a clipped box with a rotated square inside it
    const arrowElement = createHTMLElement('div',
        {
            style: {
                position: 'absolute',
                overflow: 'hidden',
                boxSizing: 'border-box',
                bottom: '0',
                left: 'calc(50% - 0.5em)',
                marginBottom: '-0.71em',
                width: '1em',
                height: '0.71em',
                color: tooltipBackgroundColor
            }
        },
        createHTMLElement('div', {
            style: {
                display: 'block',
                margin: 'auto',
                width: '100%',
                height: '100%',
                backgroundColor: 'currentColor',
                transform: 'rotate(45deg)',
                transformOrigin: '100% 0'
            }
        }));

    //the element is positioned for its arrow, and does not clip it
    const tooltipElement = createHTMLElement('div', {
        role: 'tooltip',
        style: {
            position: 'relative',
            overflow: 'visible',
            boxSizing: 'border-box',
            padding: '4px 8px',
            maxWidth: '300px',
            borderRadius: '4px',
            backgroundColor: tooltipBackgroundColor,
            color: '#fff',
            fontSize: '0.6875rem',
            fontWeight: '500',
            overflowWrap: 'break-word'
        }
    });

    return { tooltipElement, arrowElement };
}

//sets the properties of an element from a property bag;
//each key of the bag, including inherited keys, is set on the element.
const setHTMLElementFromPropertyBag = (element, propertyBag) => {
    for (const key in propertyBag) {
        const value = propertyBag[key];
        setHTMLElementProperty(element, key, value);
    }
}

//sets a property of an element;
//if the element defines its own setProperty method (e.g. a derived class), that method is used,
//otherwise the default implementation is used.
const setHTMLElementProperty = (element, key, value) => {
    //custom handling
    if (isFunction(element.setProperty)) {
        element.setProperty(key, value);
    }

    //default handling
    else {
        HTMLElement_setProperty.call(element, key, value);
    }
}

//sets an element from an array of components
const setHTMLElementFromComponentArray = (element, components) => {
    for(const component of components) {
        setHTMLElementFromComponent(element, component);
    }
}

//sets an element from a component, according to the component's type
const setHTMLElementFromComponent = (element, component) => {
    //set properties from property bag
    if (isPropertyBag(component)) {
        setHTMLElementFromPropertyBag(element, component);
        return;
    }

    //set components from array
    if (Array.isArray(component)) {
        setHTMLElementFromComponentArray(element, component);
        return;
    }

    //set up the element by function; the result of the function is ignored
    if (isFunction(component)) {
        component(element);
        return;
    }

    //append the component as dom node or text;
    //null and undefined are appended as text on purpose,
    //so as that the developer realizes that these values are null/undefined.
    element.append(component);
}

//checks if a value is a property bag;
//a value is a property bag if it is an assignable object
//and none of the prototypes in its chain was created by the engine,
//so as that arrays, dates, maps, regular expressions, URLs, DOM nodes etc are not property bags.
const isPropertyBag = (value) => {
    //not an object
    if (!isAssignableObject(value)) {
        return false;
    }

    //walk the prototype chain, until Object.prototype is found
    for (let proto = Object.getPrototypeOf(value); proto !== null && proto !== Object.prototype; proto = Object.getPrototypeOf(proto)) {
        //a native constructor means that the object is created by the engine
        const ctor = Object.getOwnPropertyDescriptor(proto, 'constructor')?.value;
        if (isFunction(ctor) && isNative(ctor)) {
            return false;
        }
    }

    return true;
}

//checks if a value is an assignable object;
//a value is an assignable object if it is not a primitive, not an array and not a function.
const isAssignableObject = (value) => {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
}

//the string representation of a native function ends with '{ [native code] }';
//the language specification requires it.
const isNativeRegEx = /\{\s*\[native code\]\s*\}\s*$/;

//checks if a function is implemented natively by the engine.
const isNative = (fn) => {
    return isNativeRegEx.test(Function.prototype.toString.call(fn));
}

//sets the properties of an object (e.g. style, dataset) from a property bag;
//the properties of the bag are assigned to the object's properties.
const setObjectFromPropertyBag = (object, propertyBag) => {
    for(const key in propertyBag) {
        const value = propertyBag[key];

        //set custom property; it works only on style objects
        if (isCustomProperty(key)) {
            assert(object instanceof CSSStyleDeclaration, customPropertyMessage(key));
            object.setProperty(key, value);
            continue;
        }

        //set property from value
        object[key] = value;
    }
}

//returns the keys of a property bag, including inherited ones, that have truthy values.
const getTruthyKeys = (propertyBag) => {
    const keys = [];
    for(const key in propertyBag) {
        if (propertyBag[key]) {
            keys.push(key);
        }
    }
    return keys;
}

//checks if a key is the name of a css custom property.
const isCustomProperty = (key) => {
    return key.startsWith('--');
}

//returns the error message for a custom property that is set on a non-style object.
const customPropertyMessage = (key) => {
    return `Custom property '${key}' can only be set on a style object; use { style: { '${key}': ... } }.`;
}
