// Goal
// const StyledWrapper = styled.div<{ backgroundColor?: string }>`
//     display: flex;
//     height: 50vh;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     gap: 0.75rem;
//     background-color: ${props => props.backgroundColor || "white"};
// `;

// Tagged thingamajig with string literals
export function styledDiv<PropTypes>(
    strings: TemplateStringsArray,
    ...values: {
        (
            props: PropTypes & {
                children: React.ReactNode;
            }
        ): string;
    }[]
) {
    return function (
        props: PropTypes & {
            children: React.ReactNode;
        }
    ) {
        let result = "";
        for (let i = 0; i < strings.length; i++) {
            result += strings[i];
            if (i < values.length) {
                result += values[i](props);
            }
        }

        return (
            <div>
                <style>
                    {`
                        @scope {
                            ${result}
                        }
                    `}
                </style>
                {props.children}
            </div>
        );
    };
}

// Use omit to refine the generic custom element type
export function styled<ElementType extends React.ElementType>(as: ElementType) {
    // This outer function is to have an option for the user to have an outer element
    const Component: React.ElementType = as;

    return function <PropTypes>(
        // This inner function is a tag function to allow them to use string literals
        // We modify the string literals to access props then we add up all the css
        strings: TemplateStringsArray,
        ...values: {
            (
                props: PropTypes & {
                    children: React.ReactNode;
                }
            ): string;
        }[]
    ) {
        return function (
            props: PropTypes &
                React.ComponentPropsWithoutRef<ElementType> & {
                    children: React.ReactNode;
                }
        ) {
            // This final function is to return the JSX with the css
            let result = "";
            for (let i = 0; i < strings.length; i++) {
                result += strings[i];
                if (i < values.length) {
                    result += values[i](props);
                }
            }

            return (
                <Component>
                    <style>
                        {`
                            @scope {
                                ${result}
                            }
                        `}
                    </style>
                    {props.children}
                </Component>
            );
        };
    };
}

styled.div = {
    styled: styledDiv
};

export function CustomWrapper({
    children,
    ...props
}: {
    children: React.ReactNode;
    backgroundColor?: string;
}) {
    return (
        <>
            <div>
                <style>
                    {`
                @scope {
                    :scope {
                        display: flex;
                        height: 50vh;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        gap: 0.75rem;
                        background-color: ${props.backgroundColor || "white"};
                    }
                }
            `}
                </style>
                {children}
            </div>
        </>
    );
}
