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
