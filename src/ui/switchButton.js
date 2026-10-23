import { initDiv } from "../html/div.js";
import { adoptStyleSheet, defineDisplaySizeProperty } from "../utility/utility.js";

import switchButtonStyleSheet from './switchButton.css' with { type: 'css' };

adoptStyleSheet(switchButtonStyleSheet);

const SELECTED_CLASS = 'switchButton-selected';
const DISABLED_CLASS = 'switchButton-disabled';

//defines the properties of a switch, which keeps its state in the closure
const defineSwitchButtonProperties = (element) => {
    let value = false;
    let disabled = false;

    const create = (className, ...children) => {
        const result = document.createElement('span');
        result.className = className;
        result.append(...children);
        return result;
    };

    const update = () => {
        element.classList.toggle(SELECTED_CLASS, value);
        element.classList.toggle(DISABLED_CLASS, disabled);
        element.setAttribute('aria-checked', String(value));
        element.setAttribute('aria-disabled', String(disabled));
        element.tabIndex = disabled ? -1 : 0;
    };

    //sets the value; the event is dispatched when it changes, by the user or by the code
    const setValue = (newValue) => {
        newValue = !!newValue;
        if (newValue !== value) {
            value = newValue;
            update();
            element.dispatchEvent(new Event('change', { bubbles: true }));
        }
    };

    Object.defineProperty(element, 'value', {
        configurable: true,
        enumerable: true,
        get: () => value,
        set: setValue
    });

    Object.defineProperty(element, 'disabled', {
        configurable: true,
        enumerable: true,
        get: () => disabled,
        set: (newValue) => {
            disabled = !!newValue;
            update();
        }
    });

    //a click toggles the switch; Space does it too, when it is released, like the key does in a check box
    element.addEventListener('click', () => {
        if (!disabled) {
            setValue(!value);
        }
    });
    element.addEventListener('keydown', (event) => {
        if (event.key === ' ') {
            event.preventDefault();
        }
    });
    element.addEventListener('keyup', (event) => {
        if (event.key === ' ' && !disabled) {
            event.preventDefault();
            setValue(!value);
        }
    });

    //the track goes in a slot that has its place and size; the thumb goes in the base, which moves and has the halo
    const defaultTrack = create('switchButton-track');
    const defaultThumb = create('switchButton-thumb');
    const trackSlot = create('switchButton-trackSlot', defaultTrack);
    const base = create('switchButton-base', defaultThumb);
    let track = defaultTrack;
    let thumb = defaultThumb;

    //defines a property whose value is the element that is in a slot: it is set to an element, to a function that returns one, or to null (the default one)
    const defineComponentProperty = (name, defaultComponent, getComponent, setComponent) => {
        Object.defineProperty(element, name, {
            configurable: true,
            enumerable: true,
            get: getComponent,
            set: (newComponent) => {
                if (typeof newComponent === 'function') {
                    newComponent = newComponent();
                }
                newComponent ??= defaultComponent;
                console.assert(newComponent instanceof Element, `The ${name} must be an element.`);
                const oldComponent = getComponent();
                if (newComponent !== oldComponent) {
                    oldComponent.replaceWith(newComponent);
                    setComponent(newComponent);
                }
            }
        });
    };

    defineComponentProperty('track', defaultTrack, () => track, (newTrack) => { track = newTrack; });
    defineComponentProperty('thumb', defaultThumb, () => thumb, (newThumb) => { thumb = newThumb; });

    element.setAttribute('role', 'switch');
    element.append(trackSlot, base);
    update();
};

/**
 * Initializes an instance of HTMLDivElement as a switch, with the appearance and the behavior of MUI's Switch.
 *
 * It invokes the function `initDiv(element, ...properties)`.
 *
 * The element gets the class 'switchButton' by default; an `additionalClassName` property adds further classes. Its `errorClassName` defaults to
 * 'switchButton-error', and its `busyClassName` to 'switchButton-busy'. It has the role 'switch', the attribute aria-checked, and the keyboard can focus it.
 *
 * The color of the switch is the `color` of its style (the default is MUI's primary color, #1976d2): the thumb of a switch that is on, and its
 * track (at half opacity), and the halo around the thumb, have it. For example: `switchButton({ style: 'color: green' })`.
 *
 * The element gets the following properties:
 *  - `value`: a boolean; the switch is on if it is true, and off if it is false (the default).
 *  - `displaySize`: 'small' (40x24), 'medium' (the default; 58x38) or 'large' (74x50; MUI has no large switch).
 *  - `disabled` (and `enabled`): if true, the user cannot change the switch, and it has the disabled colors.
 *  - `thumb`: the element of the handle that slides over the track. The default is the white circle (a span with the class 'switchButton-thumb'), which
 *    takes the color of the switch when it is on. It is set to an element, or to a function that returns one (so that a function can create the element
 *    for each switch); setting it to null brings back the default one. The element is centered in the base, which moves and has the halo, and it has
 *    no style of its own: it has the size, the colors, the shadow and the transitions that the programmer gives it. It can follow the state with
 *    the css selectors `.switchButton-selected` and `.switchButton-disabled` over it, and use `currentColor` for the color of the switch.
 *    The getter returns the element that is in use.
 *  - `track`: the element of the bar behind the thumb. The default is the rounded bar (a span with the class 'switchButton-track'), black at 38%
 *    of opacity when the switch is off, and in the color of the switch at 50% when it is on. It is set as the thumb is. The element fills the area of the
 *    track (34x14, 26x10 or 42x18, by size; the thumb overhangs it), where the programmer can give it its own size, colors and transitions.
 *
 * The overflow of the switch and of the elements in it is visible, so a thumb or a track can be drawn out of the box of the switch (the box
 * is what the layout and the clicks see: the parent of the switch may still clip what is out of it).
 *
 * The user toggles the switch with a click, or with the Space key when it has the focus.
 *
 * The event 'change' is dispatched (and bubbles) when the value changes, whether by the user or by the code, so `onchange` sets its handler.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSwitchButton = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    defineSwitchButtonProperties(element);
    defineDisplaySizeProperty(element, 'switchButton-small', 'switchButton-large');
    initDiv(element, { additionalClassName: 'switchButton', errorClassName: 'switchButton-error', busyClassName: 'switchButton-busy' }, ...properties);
}

/**
 * Creates a switch.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const switchButton = (...properties) => {
    const element = document.createElement('div');
    initSwitchButton(element, ...properties);
    return element;
}
