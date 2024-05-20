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
