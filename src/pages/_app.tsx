import type { AppProps } from 'next/app'
import React from "react";

import Layout from "../components/layout";

import "../styles/globals.css";

export default function app(props: AppProps) {
	let {Component: Page, pageProps} = props;

	return <Layout {...pageProps.layoutProps}>
		<Page {...pageProps} />
	</Layout>
}