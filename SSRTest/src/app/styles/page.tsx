import styled from "styled-components";

const Background = styled.div<{ backgroundcolor?: string }>`
    display: flex;
    height: 50vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    background-color: ${props => props.backgroundcolor || "white"};
`;

export default function Home() {
    return <Background backgroundcolor="red">awdadwdawdw</Background>;
}
