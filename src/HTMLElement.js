import { initElement } from "./Element.js";
import { isInstanceOfHTMLElement, addClassName, sortStringData } from "./util.js";

const HOVER_VALUE_PROPERTY = "__hover";
const THEME_VALUE_PROPERTY = "__theme";
const ENABLED_VALUE_PROPERTY = "__enabled";

function getStates() {
    const result = [];
    
    if (this.active) {
        result.push("pressed");
    }

    if (this.enabled) {
        result.push("enabled");
    }
    
    if (this.hover) {
        result.push("hover");
    }
    
    return result.join(',');
}

function setHover(v) {
    if (v != this[HOVER_VALUE_PROPERTY]) {
        this[HOVER_VALUE_PROPERTY] = v;
        this.updateTheme?.();
    }
}

function setTheme(newTheme) {
    this[THEME_VALUE_PROPERTY] = newTheme;
    this.updateTheme?.();
    for(let child = this.firstElementChild; child; child = child.nextElementSibling) {
        child.setTheme?.(newTheme);
    }
}

const applyStateStyle = (elem, stateStyle) => {
    if (stateStyle.apply) {
        stateStyle.apply(stateStyle, elem);        
    }
    else {
        for(const propName in stateStyle) {
            const propValue = stateStyle[propName];
            elem.style[propName] = propValue;
        }
    }
}

const findAndApplyStateStyleVerbatim = (elem, classTheme, stateString) => {
    const stateStyle = classTheme[stateString];
    if (stateStyle) {
        applyStateStyle(elem, stateStyle);
        return true;
    }
    return false;
}

const findAndApplyStateStyle = (elem, classTheme, stateString) => {
    stateString = sortStringData(stateString);

    for(let themeStateString in classTheme) {
        const stateStyle = classTheme[themeStateString];
        if (!stateStyle) {
            continue;
        }

        themeStateString = sortStringData(themeStateString);

        if (themeStateString === stateString) {
            applyStateStyle(elem, stateStyle);
            return true;
        }
    }
    
    return false;
}

function updateTheme() {
    const currTheme = this[THEME_VALUE_PROPERTY];

    //if the element has no theme, do nothing else
    if (!currTheme) {
        return;
    }

    let stateString = this.getStates?.() ?? '';

    //iterate classes from super to derived
    for(let classIndex = 0; classIndex < this.classList.length; ++classIndex) {
        const className = this.classList.item(classIndex);

        //if the class name is empty, continue with the next class
        if (!className) {
            continue;
        }

        //if no class theme exists for the class, continue with the next class
        const classTheme = currTheme[className];
        if (!classTheme) {
            continue;
        }

        //user-defined application
        if (classTheme.apply?.(classTheme, this)) {
            continue;
        }

        //find state by comparing the state string with the theme state string without any conversions
        if (findAndApplyStateStyleVerbatim(this, classTheme, stateString)) {
            continue;
        }

        //find state by sorting states
        findAndApplyStateStyle(this, classTheme, stateString);
    }
}

const setChildrenEnabled = (elem, enabled) => {
    for(let child = elem.firstElementChild; child; child = child.nextElementSibling) {
        child.enabled = enabled;
    }
}

const setEnabledDisabled = (elem, v) => {
    elem.disabled = !v;
    elem.updateTheme();
    setChildrenEnabled(elem, v);
}

const setEnabled = (elem, v) => {
    elem[ENABLED_VALUE_PROPERTY] = v;
    elem.updateTheme();
    setChildrenEnabled(elem, v);
}

const defineProperties = (elem) => {
    if ('disabled' in elem) {
        Object.defineProperty(elem, 'enabled', {
            get: function() { return !this.disabled; },
            set: function(v) { setEnabledDisabled(this, v); }
        });
    }
    else {
        elem[ENABLED_VALUE_PROPERTY] = true;
        Object.defineProperty(elem, 'enabled', {
            get: function() { return this[ENABLED_VALUE_PROPERTY]; },
            set: function(v) { setEnabled(this, v); }
        });
    }

    Object.defineProperty(elem, 'visible', {
        get: function() { return !this.hidden; },
        set: function(v) { this.hidden = !v; }
    });

    Object.defineProperty(elem, 'hover', {
        get: function() { return this[HOVER_VALUE_PROPERTY]; },
        set: setHover
    });

    Object.defineProperty(elem, 'active', {
        get: function() { return this.matches(':active'); }
    });

    Object.defineProperty(elem, 'state', {
        get: function() { return this.getStates?.(); }
    });

    Object.defineProperty(elem, 'theme', {
        get: function() { return this[THEME_VALUE_PROPERTY]; },
        set: setTheme
    });
}

const defineMethods = (elem) => {
    elem.getStates = getStates;
    elem.setTheme = setTheme;
    elem.updateTheme = updateTheme;
}

const processProperties = (elem, props) => {
    if (props) {
        const propertiesToRemove = [];

        for(const propName in props) {
            const propValue = props[propName];

            //set the style object
            if (propName === 'style') {
                for(const stylePropName in propValue) {
                    const stylePropValue = propValue[stylePropName];
                    elem.style[stylePropName] = stylePropValue;
                }
                propertiesToRemove.push(propName);
            }

            //else set a style property
            else if (propName in elem.style) {
                elem.style[propName] = propValue;
                propertiesToRemove.push(propName);
            }
        }

        //remove properties from properties object to pass them to the inner function
        if (propertiesToRemove.length > 0) {
            props = {...props};
            for(const propertyName of propertiesToRemove) {
                delete props[propertyName];
            }
        }
    }

    return props;
}

const addEventHandlers = (elem) => {
    elem.addEventListener("mouseenter", function() {
        this.hover = true;
    });

    elem.addEventListener("mouseleave", function() {
        this.hover = false;
    });

    elem.addEventListener("mousedown", function () {
        this.updateTheme?.();
    })

    elem.addEventListener("mouseup", function () {
        this.updateTheme?.();
    })
}

/**
 * Initializes an HTML element.
 * 
 * It initializes the element by invoking `initElement(elem, props)`.
 * 
 * The following properties are added to an HTMLElement:
 * 
 *  - 'enabled': for elements with a 'disabled' property, it gets/sets the 'disabled' property;
 *      for elements without a 'disabled' property, it defines a custom boolean property.
 * 
 *      When the value of the enabled property is changed, the relevant properties of the descentants
 *      are also set.
 * 
 *      Only those classes that have the attribute 'disabled' have their input disabled.
 *      For the classes that do not have the 'disabled' attribute, event handlers must check 
 *      for the enabled property.
 * 
 *  - 'visible': returns and sets the 'hidden' property.
 * 
 *  - 'hover': returns and sets the hover state.
 * 
 *  - 'active': returns if true if the element matches the ':active' selector.
 * 
 *  - 'state': returns the state array of the object.
 * 
 *  - 'theme': returns and sets the theme of the element.
 * 
 * The following methods are added to an HTMLElement:
 * 
 *  - 'getStates()': invoked to return the states of the object as an string of states, separated by comma; 
 *      it can be overriden to add more states to the element.
 * 
 *  - 'setTheme(theme)': invoked when a theme is set or reset, allowing the element to theme itself.
 *      It sets the theme member value, then invokes the `updateTheme()` method to update the element from the theme.
 * 
 *  - 'updateTheme()': invoked when the theme or the object state changes and the element should update its style from the theme.
 *      The default implementantion sets the element's style from the theme, depending on the state string.
 * 
 * The following event handlers are added to an HTMLElement:
 * 
 *  - mouseenter: sets the 'hover' property to true.
 *  - mouseleavel: sets the 'hover' property to false.
 *  - mousedown: invokes the updateTheme() method to update the element visual state.
 *  - mouseup: invokes the updateTheme() method to update the element visual state.
 * 
 * If a property is named 'style', then that object's properties are used
 * to set the style of the object.
 * 
 * If a property is found in the element's style,
 * then it is set, allowing setting the element's style
 * without explicitly referring to a style object.
 * 
 * Themeing
 * --------
 * 
 * A theme is an object; each key string in this object contains a class or tag name, and each value
 * contains another object, the class theme.
 * 
 * A class theme is also an object, and each key of this object contains a comma-separated string of states of the element,
 * called the state string, and each value contains another object, the state style.
 * 
 * The state style contains properties of an element's style to be applied to the element, if the there is a state match.
 * 
 * Here is an example:
 * 
 *  ```javascript
 *  {
 *      //class theme for the HTMLElement class; applied for all elements that inherit from HTMLElement.
 *      "HTMLElement": {
 *          //disabled state only
 *          "": {
 *              backgroundColor: "grey";
 *          },
 * 
 *          //enabled state only
 *          "enabled": {
 *              backgroundColor: "white";
 *          },
 * 
 *          //enabled and hover state only
 *          "enabled,hover": {
 *              backgroundColor: "pink";
 *          }
 *      },
 * 
 *      //specific theme for the HTMLImageElement class or 'img' tag:
 *      "HTMLImageElement" : {
 *          "enabled,hover": {
 *              backgroundColor: "cyan";
 *          }
 *      },
 * 
 *      //alternative version of the above; there is no need for both, here it exists as an example
 *      "img" : {
 *          "enabled,hover": {
 *              backgroundColor: "cyan";
 *          }
 *      },
 *  }
 *  ```
 * 
 *  The above declaration allows themeing per class/tag.
 * 
 * Theme Application
 * -----------------
 * 
 * The top-level algorithm that applies a theme to an html element is the following (in pseudocode):
 * 
 *  ```
 *  for each class name in the class name list of the element:
 *      let class theme = find class theme in theme object:
 *      if class theme is found then
 *          apply class theme to element
 *      end if
 *  end for
 *  ```
 * 
 * In other words, order of class names is important: the most derived class should be the rightmost class name in the class name list of an element.
 * 
 * Once a class theme is found, the following algorithm locates and applies the appropriate style to the element:
 * 
 *  ```
 *  let state string or array = get state string/array from element (apply the method getStates() to the element)
 *  let state style = locate the state style for element from its state string/array
 *  if state style is found then
 *      apply state style
 *  end if
 *  ```
 * 
 * The location of the state string is done by one of the following algorithms, in the exact same order:
 * 
 *  1. if the class theme contains a function `apply(classTheme, element)`,
 *     then it is invoked.
 * 
 *  1. if the class theme contains a state string that is equal to the state string of the element,
 *     then the style that corresponds to that state string is applied to the element.
 * 
 *  1. if the class theme contains a state string which, after being converted to lower case and has whitespace removed,
 *     matches the state string of the element (which also is converted to lower case and has whitespace removed),
 *     then the style that corresponds to that state string is applied to the element.
 * 
 *  1. if a class theme state string contains all the states of an element (conversion to lower case applied to both),
 *     then the style that corresponds to that state string is applied to the element.
 * 
 * finally, a state style is applied by the following algorithm:
 * 
 *  ```
 *      if state style contains the function `apply(stateStyle, element)' then
 *          invoke apply(stateStyle, element)
 *      else
 *          for each property of the state style
 *              apply the property to the element's style
 *          end if
 *      end if
 *  ```
 *  Since a class theme or a state style can contain a custom `apply` function,
 *  the types of properties in those objects can be anything desired.
 * 
 * @param {*} elem the html element object to initialize.
 * @param {*} props the properties object.
 * @param {*} children array of children to add to this element.
 * 
 * @returns the html element object.
 */
export const initHTMLElement = (elem, props, children) => {
    console.assert(isInstanceOfHTMLElement(elem));
    defineProperties(elem);
    defineMethods(elem);
    addEventHandlers(elem);
    props = processProperties(elem, props);
    return initElement(elem, addClassName(props, "HTMLElement"), children);
}

//the root html element is an HTML element
initHTMLElement(document.documentElement, {className: "HTMLHtmlElement html"});

//the body is an HTML element
initHTMLElement(document.body, {className: "HTMLBodyElement body"});
