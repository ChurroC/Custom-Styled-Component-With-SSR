import StyledComponentsRegistry from "../../components/registry";

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
}
