import { button } from '/src/ui/button.js';
import { div } from '/src/html/div.js';
import { router, navigate } from './src/ui/router.js';
import { checkBox } from './src/ui/checkBox.js';
import { radioButton } from './src/ui/radioButton.js';
import { floatingActionButton } from './src/ui/floatingActionButton.js';
import { textInput } from './src/ui/textInput.js';
import { numberInput } from './src/ui/numberInput.js';
import { passwordInput } from './src/ui/passwordInput.js';
import { rangeInput } from './src/ui/rangeInput.js';
import { dateTimeLocalInput } from './src/ui/dateTimeLocalInput.js';
import { group } from './src/ui/group.js';
import { rating } from './src/ui/rating.js';
import { span } from '/src/html/span.js';
import { property, event } from './src/utility/utility.js';
import { maskedInput } from './src/ui/maskedInput.js';
import { comboBox } from './src/ui/comboBox.js';
import { optGroup } from './src/html/optGroup.js';
import { option } from './src/html/option.js';
import { slider } from './src/ui/slider.js';
import { switchButton } from './src/ui/switchButton.js';
import { toggleButton } from './src/ui/toggleButton.js';
import { toggleButtonGroup } from './src/ui/toggleButtonGroup.js';
import { checkIcon } from './src/ui/checkIcon.js';
import { badge } from './src/ui/badge.js';
import { avatar } from '/src/ui/avatar.js';
import { avatarGroup } from '/src/ui/avatarGroup.js';

const ipv4mask =
[
    {
        label: "   ",
        pattern: "[0-9]{3}",
        min: 0,
        max: 255
    },
    {
        label: '.'
    },
    {
        label: "   ",
        pattern: "[0-9]{3}",
        min: 0,
        max: 255
    },
    {
        label: '.'
    },
    {
        label: "   ",
        pattern: "[0-9]{3}",
        min: 0,
        max: 255
    },
    {
        label: '.'
    },
    {
        label: "   ",
        pattern: "[0-9]{3}",
        min: 0,
        max: 255
    }
];

const createApp = () => {
    return div(
        {
            style: "width: 100%; height: 100%; display: flex; flex-direction: column"
        },
        div(
            {
                style: "width: 100%; display: flex; flex-direction: row; gap: 8px;align-items: center"
            },
            button({ tooltip: "Show the pink box", onclick: () => navigate('/app/pink') }, "Pink"),
            button({ tooltip: "Show the blue box", onclick: () => navigate('/app/blue') }, "Blue", checkIcon()),
            "Press a button - Πιεσε ενα πληκτρο",
            checkBox({id: "cb1"}, "Label"),
            radioButton({name: "option1"}, "Radio 1"),
            radioButton({name: "option1", id: "radio2"}, "Radio 2"),
            floatingActionButton('+'),
            numberInput({value: 0, displaySize: "large"}),
            passwordInput({label: "Password", displaySize: "large"}),
            rangeInput({valueLabelDisplay: "on"}),
            dateTimeLocalInput({seconds:true, pastEnabled:false})
        ),
        div(
            {
                style: "background-color: cyan; width: 100%; height: 75%",
                additionalClassName: 'outlet'
            }
        )
    );
}

router([
    {
        path: '/',
        render: '/app'
    },
    {
        path: '/app',
        render: createApp(),
        children: [
            {
                path: '/pink',
                render: () => div({
                    style: "background-color: pink; width: 64px; height: 64px", 
                    onrouted: () => console.log("pink routed!"),
                    onunrouted: () => console.log("pink unrouted!")
                    }, 
                    "Pink",
                )
            },
            {
                path: '/blue',
                render: div({
                    style: "background-color: white; width: 100%; height: 100%;display: flex; flex-direction: row;gap:16px; padding: 16px;flex-flow: row wrap", 
                    onrouted: () => console.log("blue routed!"),
                    onunrouted: () => console.log("blue unrouted!")
                    }, 
                    "Blue",
                    group(
                        {label: "Options"},
                        radioButton("Option 1"),
                        radioButton("Option 2"),
                        radioButton("Option 3"),
                    ),
                    rating({
                        step: 0.5,
                        value: 3.5,
                        values: { 1: "Useless", 2: "Poor", 3: "Ok", 4: "Good", 5: "Excellent" },
                        oninput: (e) => console.log("rating input:", e.target.value),
                        onchange: (e) => console.log("rating change:", e.target.value)
                    }),
                    button(
                        property("tooltip", "Show/hide the element below"),
                        event("click", () => {document.getElementById("hideme").visible = !document.getElementById("hideme").visible}),
                         "Hide/Show"
                    ),
                    span({id: "hideme"}, "Some widget"),
                    maskedInput({mask:ipv4mask}),
                    comboBox({label: "Select option"},
                        optGroup({label: "Options"},
                            option("Option 1"),
                            option("Option 2"),
                            option("Option 3")
                        )
                    ),
                    slider(),
                    switchButton({ onchange: (e) => console.log("switch change:", e.target.value) }),
                    toggleButtonGroup(
                        toggleButton({ onchange: (e) => console.log("left:", e.target.value) }, "Left"),
                        toggleButton("Center"),
                        toggleButton("Right")
                    ),
                    toggleButton("alone"),
                    badge({label: ''}, checkIcon()),
                    avatarGroup(
                        avatar('A'),
                        avatar('B'),
                        avatar('C'),
                        avatar('D'),
                        avatar('E'),
                    )
                )
            }
        ]
    }
]);
