import fs from "fs/promises";
import path from "path";

interface Data {
    value: number;
}

interface Analytics {
    TTFB: Data;
    FCP: Data;
    LCP: Data;
    FID: Data;
    CLS: Data;
    INP: Data;
    time: Data;
}

export default async function HomePage() {
    let nextCustomStylesAnalytics: Analytics | null = null;
    try {
        nextCustomStylesAnalytics = JSON.parse(
            await fs.readFile(
                path.resolve(
                    process.cwd(),
                    "../nextCustomStylesComparison/analyticsData/analytics.json"
                ),
                "utf-8"
            )
        ) as Analytics;
    } catch (e) {
        console.error(e);
    }

    let nextStylesAnalytics: Analytics | null = null;
    try {
        nextStylesAnalytics = JSON.parse(
            await fs.readFile(
                path.resolve(
                    process.cwd(),
                    "../nextStylesComparison/analyticsData/analytics.json"
                ),
                "utf-8"
            )
        ) as Analytics;
    } catch (e) {
        console.error(e);
    }

    let linaria: Analytics | null = null;
    try {
        linaria = JSON.parse(
            await fs.readFile(
                path.resolve(
                    process.cwd(),
                    "../linaria/analyticsData/analytics.json"
                ),
                "utf-8"
            )
        ) as Analytics;
    } catch (e) {
        console.error(e);
    }

    return (
        <div className="flex h-2/3 w-2/3 max-w-3xl items-center justify-around">
            <div className="flex size-full flex-1 flex-col items-center justify-between">
                <p>Next Custom Styles</p>
                {(
                    [
                        "TTFB",
                        "FCP",
                        "LCP",
                        "FID",
                        "CLS",
                        "INP"
                    ] as (keyof Analytics)[]
                ).map(item => {
                    return (
                        <Item
                            object1={nextCustomStylesAnalytics}
                            object2={nextStylesAnalytics}
                            objectKey={item}
                            key={item}
                        />
                    );
                })}
                <p title="Last Updated">
                    Date:{" "}
                    {nextCustomStylesAnalytics?.time
                        ? new Date(
                              nextCustomStylesAnalytics?.time.value
                          ).toLocaleString()
                        : "No Data"}
                </p>
            </div>
            <div className="flex size-full flex-1 flex-col items-center justify-between">
                <p>Next Styles</p>
                {(
                    [
                        "TTFB",
                        "FCP",
                        "LCP",
                        "FID",
                        "CLS",
                        "INP"
                    ] as (keyof Analytics)[]
                ).map(item => {
                    return (
                        <Item
                            object1={nextStylesAnalytics}
                            object2={nextCustomStylesAnalytics}
                            objectKey={item}
                            key={item}
                        />
                    );
                })}
                <p title="Last Updated">
                    Date:{" "}
                    {nextStylesAnalytics?.time
                        ? new Date(
                              nextStylesAnalytics?.time.value
                          ).toLocaleString()
                        : "No Data"}
                </p>
            </div>
            <div className="flex size-full flex-1 flex-col items-center justify-between">
                <p>Linaria</p>
                {(
                    [
                        "TTFB",
                        "FCP",
                        "LCP",
                        "FID",
                        "CLS",
                        "INP"
                    ] as (keyof Analytics)[]
                ).map(item => {
                    return (
                        <Item
                            object1={linaria}
                            object2={nextStylesAnalytics}
                            objectKey={item}
                            key={item}
                        />
                    );
                })}
                <p title="Last Updated">
                    Date:{" "}
                    {linaria?.time
                        ? new Date(linaria?.time.value).toLocaleString()
                        : "No Data"}
                </p>
            </div>
        </div>
    );
}

const analyticsInfo: Record<keyof Analytics, string> = {
    TTFB: "Time to First Byte",
    FCP: "First Contentful Paint",
    LCP: "Largest Contentful Paint",
    FID: "First Input Delay",
    CLS: "Cumulative Layout Shift",
    INP: "Input Performance",
    time: "Last Updated"
};

function Item({
    object1,
    object2,
    objectKey
}: {
    object1: Analytics | null;
    object2: Analytics | null;
    objectKey: keyof Analytics;
}) {
    let textColor = "";
    if (object1?.[objectKey]?.value && object2?.[objectKey]?.value) {
        if (object1[objectKey].value < object2?.[objectKey].value) {
            textColor = "text-green-500";
        } else {
            textColor = "text-red-500";
        }
    }

    return (
        <p className={textColor} title={analyticsInfo[objectKey]}>
            {objectKey}: {object1?.[objectKey]?.value.toFixed(2) ?? "No Data"}
        </p>
    );
}
