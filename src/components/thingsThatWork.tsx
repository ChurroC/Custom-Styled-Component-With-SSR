import { styled as styledCustom } from "./TestCustom";
import styled from "styled-components";

//
const Background = styled.div<{ backgroundColor?: string }>`
    :scope {
        display: flex;
        height: 50vh;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;
        background-color: ${props => props.backgroundColor || "white"};
    }
`;
const BackgroundCustom = styledCustom.div<{ backgroundColor?: string }>`
    display: flex;
    height: 50vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    background-color: ${props => props.backgroundColor || "white"};
`;

//
const Button = styled.button`
    color: #bf4f74;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #bf4f74;
    border-radius: 3px;
`;

const TomatoButton = styled(Button)`
    :scope {
        color: tomato;
        border-color: tomato;
    }
`;

const ButtonCustom = styledCustom.button`
    :scope {
        color: #bf4f74;
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid #bf4f74;
        border-radius: 3px;
    }
`;

const TomatoButtonCustom = styledCustom(ButtonCustom)`
    color: tomato;
    border-color: tomato;
`;

//
const Button = styled.button`
    display: inline-block;
    color: #bf4f74;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #bf4f74;
    border-radius: 3px;
    display: block;
`;

const ButtonCustom = styledCustom.button`
    :scope{
        display: inline-block;
        color: #bf4f74;
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid #bf4f74;
        border-radius: 3px;
        display: block;
    }
`;

<>
    <div>
        <Button>Normal Button</Button>
        <Button as={"span"}>Custom Button in Span</Button>
    </div>
    <div>
        <ButtonCustom>Normal Button</ButtonCustom>
        <ButtonCustom as={"span"}>Custom Button in Span</ButtonCustom>
    </div>
</>;

//
const Button = styled.button`
    display: inline-block;
    color: #bf4f74;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #bf4f74;
    border-radius: 3px;
    display: block;
`;

const ButtonCustom = styledCustom.button`
    :scope{
        display: inline-block;
        color: #bf4f74;
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid #bf4f74;
        border-radius: 3px;
        display: block;
    }
`;

<>
    <div>
        <Button>Normal Button</Button>
        <Button as={"span"}>Custom Button in Span</Button>
    </div>
    <div>
        <ButtonCustom>Normal Button</ButtonCustom>
        <ButtonCustom as={"span"}>Custom Button in Span</ButtonCustom>
    </div>
</>;

//

const Thing = styled.div`
    color: blue;

    .something {
        border: 1px solid;
        display: block;
    }
`;

const ThingCustom = styledCustom.div`
    :scope {
        color: blue;
    }

    .something {
        border: 1px solid;
        display: block;
    }
`;

<>
    <Thing>
        <label htmlFor="foo-button" className="something">
            Mystery button
        </label>
        <button id="foo-button">What do I do?</button>
    </Thing>
    <ThingCustom>
        <label htmlFor="foo-button" className="something">
            Mystery button
        </label>
        <button id="foo-button">What do I do?</button>
    </ThingCustom>
</>;

// DOESTN WORK

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
    :scope{
        color: blue; //works
    }

    :scope:hover {
        color: red; //works
    }

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
        <ThingCustom className="something">The sun is shining...</ThingCustom>
        <div>Pretty nice day today.</div>
        <ThingCustom>Don't you think?</ThingCustom>
        <div className="something-else">
            <ThingCustom>Splendid.</ThingCustom>
        </div>
    </div>
</>;
