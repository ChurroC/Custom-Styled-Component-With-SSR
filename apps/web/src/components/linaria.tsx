import { styled } from "@linaria/react";

const Thing = styled.div`
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

export default function StyledLinaria() {
    return (
        <div>
            <Thing>Hello world!</Thing>
            <Thing>How ya doing?</Thing>
            <Thing className="something">The sun is shining...</Thing>
            <div>Pretty nice day today.</div>
            <Thing>Don`&apos;`t you think?</Thing>
            <div className="something-else">
                <Thing>Splendid.</Thing>
            </div>
        </div>
    );
}
