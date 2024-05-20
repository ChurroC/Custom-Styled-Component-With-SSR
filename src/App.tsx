import { CustomWrapper, styledDiv } from "./Components/TestCustom";
import { StyledWrapper } from "./Components/TestStyled";

const CustomDiv = styledDiv<{
    backgroundColor?: string;
}>`
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

function App() {
    return (
        <>
            <StyledWrapper backgroundColor="green">
                <div>Theme: Blah Blah Blah</div>
                <button>Dark</button>
                <button>Light</button>
                <button>Pink</button>
                <button>System</button>
            </StyledWrapper>
            <CustomWrapper backgroundColor="red">
                <div>Theme: Blah Blah Blah</div>
                <button>Dark</button>
                <button>Light</button>
                <button>Pink</button>
                <button>System</button>
            </CustomWrapper>
            <CustomDiv backgroundColor="blue">
                <div>Theme: Blah Blah Blah</div>
                <button>Dark</button>
                <button>Light</button>
                <button>Pink</button>
                <button>System</button>
            </CustomDiv>
        </>
    );
}

export default App;
