import { styled as styledCustom } from "../TestCustom";

const BackgroundCustom = styledCustom.div<{ backgroundcolor?: string }>`
    :scope{
        display: flex;
        height: 50vh;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;
        background-color: ${props => props.backgroundcolor || "white"};
    }
`;

export default function Home() {
    return (
        <BackgroundCustom backgroundcolor="green">awdadwdawdw</BackgroundCustom>
    );
}
