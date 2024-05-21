import { styled as styledCustom } from "./Components/TestCustom";
import styled from "styled-components";

const Thing = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
    color: blue;

    &:hover {
        color: red; // <Thing> when hovered
    }

    & ~ & {
        background: tomato; // <Thing> as a sibling of <Thing>, but maybe not directly next to it
    }

    & + & {
        background: lime; // <Thing> next to <Thing>
    }

    &.something {
        background: orange; // <Thing> tagged with an additional CSS class ".something"
    }

    .something-else & {
        border: 1px solid; // <Thing> inside another element labeled ".something-else"
    }
`;

const ThingCustom = styledCustom.div`
    color: blue; //works

    :scope:hover {
        color: red; //works
    }

    background: red
    
    :scope ~ :scope {
        background: tomato; // Doesn't work because every div has its own scope
    }

    :scope + :scope {
        background: lime; 
    }

    :scope.something {
        background: orange; //works
    }

    .something-else :scope {
        border: 1px solid; //works
    }
`;

function App() {
    return (
        <>
            <div>
                <Thing>Hello world!</Thing>
                <Thing>How ya doing?</Thing>
                <Thing className="something">The sun is shining...</Thing>
                <div>Pretty nice day today.</div>
                <Thing>Don't you think?</Thing>
                <div className="something-else">
                    <Thing>Splendid.</Thing>
                </div>
            </div>

            <div>
                <ThingCustom>Hello world!</ThingCustom>
                <ThingCustom>How ya doing?</ThingCustom>
                <ThingCustom className="something">
                    The sun is shining...
                </ThingCustom>
                <div>Pretty nice day today.</div>
                <ThingCustom>Don't you think?</ThingCustom>
                <div className="something-else">
                    <ThingCustom>Splendid.</ThingCustom>
                </div>
            </div>
        </>
    );
}

export default App;
