import { Taller } from "./pages/Taller/Taller.jsx";
import { Technology } from "./pages/Technology/Technology.jsx";

export const routes = [
    {
        path: '/taller',
        element: <Taller />
    },
    {
        path: '/technology',
        element: <Technology />
    },
    {
        path: '/*',
        element: <Taller />
    },
]