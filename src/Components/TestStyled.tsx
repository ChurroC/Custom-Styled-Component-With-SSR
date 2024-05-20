import styled from "styled-components";

// Create a Wrapper component that'll render a <section> tag with some styles
export const StyledWrapper = styled.div<{ backgroundColor?: string }>`
    display: flex;
    height: 50vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    background-color: ${props => props.backgroundColor || "white"};
`;
