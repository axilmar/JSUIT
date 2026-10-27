import { initNode } from "./Node.js";
import { defineTooltipProperty } from "../ui/tooltip.js";
import { adoptStyleSheet, defineEventProperty, defineReverseBooleanProperty } from "../utility/utility.js";

import busySpinnerStyleSheet from '../ui/busySpinner.css' with { type: 'css' };

adoptStyleSheet(busySpinnerStyleSheet);

//id counters
const idCounters = {};

//sets a default id for an element
const setDefaultId = (element) => {
    //if element has an id, do nothing else
    if (element.id) {
        return;
    }

    //get the type of the element from the last class it has (the most derived component) or its name or its tag name
    const type = element.classList.item(element.classList.length - 1) ?? element.name ?? element.tagName;

    //locate the id counter and increment it; set the id from it
    element.id = idCounters[type] = (idCounters[type] ?? 0) + 1;
}

//splits a string of space-delimited class names into an array of class names
const splitClassNames = (classNames) => classNames.split(/\s+/).filter(name => name.length > 0);

//defines the write-only property 'additionalClassName'
const defineAdditionalClassNameProperty = (element) => {
    Object.defineProperty(element, 'additionalClassName', {
        configurable: true,
        enumerable: false,
        set: (classNames) => {
            console.assert(typeof classNames === 'string');
            element.classList.add(...splitClassNames(classNames));
        }
    });
};

//defines a property that holds a string of space-delimited class names
const defineClassNameProperty = (element, propertyName, defaultValue = '') => {
    let classNames = defaultValue;

    Object.defineProperty(element, propertyName, {
        configurable: true,
        enumerable: true,
        get: () => classNames,
        set: (value) => {
            console.assert(typeof value === 'string');
            classNames = value;
        }
    });
};

//defines a boolean property that applies the class names held in another property while it is true
const defineStateProperty = (element, propertyName, classNamePropertyName, onChange) => {
    let state = false;
    let appliedClassNames = [];

    Object.defineProperty(element, propertyName, {
        configurable: true,
        enumerable: true,
        get: () => state,
        set: (value) => {
            value = !!value;
            if (value === state) {
                return;
            }
            state = value;

            //false -> true: apply the class names and remember them
            if (state) {
                appliedClassNames = splitClassNames(element[classNamePropertyName]);
                element.classList.add(...appliedClassNames);
            }

            //true -> false: remove the class names that were applied
            else {
                element.classList.remove(...appliedClassNames);
                appliedClassNames = [];
            }

            onChange?.(state);
        }
    });
};

//creates the default spinner element
const createDefaultSpinner = () => document.createElement('div');

//defines the property 'spinner'; returns the functions that show and hide the spinner
const defineSpinner = (element) => {
    let spinner = null;             //the spinner element; created on demand
    let shownSpinner = null;        //the spinner currently shown in the element, or null
    let appliedClassNames = [];     //the class names applied to the shown spinner
    let positionChanged = false;    //true if the element's inline position was changed while showing the spinner
    let savedPosition = '';         //the element's inline position before showing the spinner

    //shows the spinner, centered on the element
    const show = () => {
        spinner ??= createDefaultSpinner();
        shownSpinner = spinner;

        //the spinner is positioned relative to the element
        if (getComputedStyle(element).position === 'static') {
            savedPosition = element.style.position;
            element.style.position = 'relative';
            positionChanged = true;
        }

        //center the spinner
        shownSpinner.style.position = 'absolute';
        shownSpinner.style.left = '50%';
        shownSpinner.style.top = '50%';
        shownSpinner.style.translate = '-50% -50%';
        shownSpinner.style.pointerEvents = 'none';

        //apply the spinner style
        appliedClassNames = splitClassNames(element.busySpinnerClassName);
        shownSpinner.classList.add(...appliedClassNames);

        element.append(shownSpinner);
    };

    //hides the spinner
    const hide = () => {
        if (!shownSpinner) {
            return;
        }
        shownSpinner.classList.remove(...appliedClassNames);
        shownSpinner.remove();
        shownSpinner = null;
        appliedClassNames = [];

        if (positionChanged) {
            element.style.position = savedPosition;
            positionChanged = false;
        }
    };

    Object.defineProperty(element, 'spinner', {
        configurable: true,
        enumerable: true,
        get: () => spinner ??= createDefaultSpinner(),
        set: (newSpinner) => {
            console.assert(newSpinner instanceof Element);
            const wasShown = shownSpinner !== null;
            hide();
            spinner = newSpinner;
            if (wasShown) {
                show();
            }
        }
    });

    return { show, hide };
};

//if the element has a disabled property, then define an enabled property for it,
//if it does not have one
const defineEnabledProperty = (element) => {
    if ('disabled' in element && !('enabled' in element)) {
        defineReverseBooleanProperty(element, 'enabled', 'disabled');
    }
}

/**
 * Initializes an element.
 * 
 * It invokes the function `initNode(element, ...properties)`.
 * 
 * The element gets a write-only property 'additionalClassName', which accepts a string of
 * space-delimited class names; the class names are appended
 * to the element's class list, keeping the existing ones.
 * 
 * The element also gets a property 'errorClassName', which holds a string of
 * space-delimited class names (default: empty string).
 * 
 * The element also gets a property 'busyClassName', which holds a string of
 * space-delimited class names (default: empty string).
 * 
 * The element also gets a boolean property 'error' (default false). When it changes
 * from false to true, the class names of 'errorClassName' are added to the element and remembered;
 * when it changes from true to false, the remembered class names are removed.
 * 
 * The element also gets a boolean property 'busy' (default false), which works the same way
 * with the class names of 'busyClassName'.
 * 
 * The element also gets a property 'busySpinnerClassName' (default 'busySpinner', a blue spinning circle),
 * which holds the class names applied to the spinner while it is shown.
 * 
 * The element also gets a property 'spinner', the element shown centered over the content while the element is busy.
 * Its default is a div that, with the default 'busySpinnerClassName', looks like a spinning circle.
 * 
 * The element also gets a property 'tooltip' (default empty): an element, or a value, shown in a tooltip above the mouse
 * cursor while the cursor is inside the element; see `defineTooltipProperty`. The property 'tooltipClassName' (default null)
 * holds class names that are added to the tooltip.
 * 
 * The element also gets the 'onrouted' and 'onunrouted' properties, which are used to set the event handlers
 * for the 'routed' and 'unrouted' events respectively.
 * 
 * @param {*} element the node to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initElement = (element, ...properties) => {
    console.assert(element instanceof Element);
    defineAdditionalClassNameProperty(element);
    defineClassNameProperty(element, 'errorClassName');
    defineClassNameProperty(element, 'busyClassName');
    defineStateProperty(element, 'error', 'errorClassName');
    defineClassNameProperty(element, 'busySpinnerClassName', 'busySpinner');
    defineEventProperty(element, "onrouted", "routed");
    defineEventProperty(element, "onunrouted", "unrouted");
    defineReverseBooleanProperty(element, "visible", "hidden");
    defineEnabledProperty(element);
    defineTooltipProperty(element);
    const spinner = defineSpinner(element);
    defineStateProperty(element, 'busy', 'busyClassName', (busy) => busy ? spinner.show() : spinner.hide());
    initNode(element, { additionalClassName: 'Element' }, ...properties);
    setDefaultId(element);
}
