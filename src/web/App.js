import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import styled from "styled-components";

const Universe = styled.pre`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

import("xenolite").then(xenolite => {
    const universe = xenolite.Universe.new();

    const Home = () => {
        const [view, setView] = useState(universe.render());

        setTimeout(() => {
            universe.tick();
            setView(universe.render());
        }, 200);

        return <Universe>{view}</Universe>;
    };

    ReactDom.render(<Home />, document.getElementById("root"));
});
