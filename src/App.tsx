import { CustomWrapper } from "./Components/TestCustom";
import { StyledWrapper } from "./Components/TestStyled";

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
        </>
    );
}

export default App;
