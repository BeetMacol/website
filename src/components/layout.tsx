import { AppProps } from "next/dist/next-server/lib/router/router";
import React, { ReactNode } from "react";

export default function layout({children}: {children: ReactNode}) {
    return (
        <div className="bg-primary min-h-screen text-white">
            <head>
                <title>a website</title>
            </head>
            <body>
                <div className="flex-grow">{children}</div>
            </body>
        </div>
    )
}