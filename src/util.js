/**
 * Searches all available style sheets for a rule with the given selector.
 * @param {*} selectorText the selector text to search for.
 * @return the CSS rule for the given selector or null if not found.
 */
export const findCSSRule = (selectorText) => {
    //iterate style sheets
    for (let styleSheetIndex = 0; styleSheetIndex < document.styleSheets.length; ++styleSheetIndex) {
        const styleSheet = document.styleSheets[styleSheetIndex];

        //iterate rules
        const rules = styleSheet.cssRules || styleSheet.rules;
        if (rules) {
            for (let ruleIndex = 0; ruleIndex < rules.length; ++ruleIndex) {
                const rule = rules[ruleIndex];

                //if rule is found, return it
                if (rule.selectorText === selectorText) {
                    return rule;
                }
            }
        }
    }
    return null;
}

/**
 * Searches all available style sheets for a rule with the given selector.
 * If not found, then it creates one at sheet[0] as the last rule.
 * If sheet[0] does not exist, then it is created.
 * @param {*} selectorText the selector to search for.
 * @return the CSS rule for the given selector or null if not found.
 */
export const findOrCreateCSSRule = (selectorText) => {
    //find the rule
    let rule = findCSSRule(selectorText);

    //rule not found; create a new one
    if (!rule) {
        //if there are no style sheets, create one
        if (document.styleSheets.length === 0) {
            const style = document.createElement('style');
            document.head.appendChild(style);
        }

        //get the sheet to create the rule at
        const sheet0 = document.styleSheets.item(0);

        //create an empty rule for it and get it
        const index = sheet0.insertRule(`${selectorText} {}`, sheet0.cssRules.length);
        rule = sheet0.cssRules.item(index);
}

    //return the rule
    return rule;
}

/**
 * It creates or updates a css style for the given selector.
 * @param {*} selectorText the selector text.
 * @param {*} propName name of the CSS rule to set; if empty, then the rule object itself is set.
 * @param {*} props the object with properties of the rule to set.
 */
export const setCSSRule = (selectorText, propName, props) => {
    //find the rule
    const rule = findOrCreateCSSRule(selectorText);

    //set the rule
    Object.assign(propName ? rule[propName] : rule, props);
}
