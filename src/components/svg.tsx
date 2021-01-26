import React, { ReactNode } from "react";

export default function Svg({children}: {children: ReactNode}) {
	return (
		<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision">
			{children}
		</svg>
	)
}
