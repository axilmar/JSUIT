import { button } from '/src/button.js';
import { div } from '/src/div.js';
import { router, navigate } from './src/router.js';

const createApp = () => {
    return div(
        {
            style: "background-color: gray; width: 100%; height: 100%; display: flex; flex-direction: column"
        },
        div(
            {
                style: "background-color: white; width: 100%; display: flex; flex-direction: row"
            },
            button({ onclick: () => navigate('/app/pink') }, "Pink"),
            button({ onclick: () => navigate('/app/blue') }, "Blue"),
        ),
        div(
            {
                style: "background-color: lightgray; width: 100%; height: 75%",
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
                render: () => div({style: "background-color: pink; width: 64px; height: 64px"}, "Pink")
            },
            {
                path: '/blue',
                render: () => div({style: "background-color: blue; width: 64px; height: 64px"}, "Blue")
            }
        ]
    }
]);
