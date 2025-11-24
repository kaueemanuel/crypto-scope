import "@/lib/globals.css";

import { Navbar } from "@/components";
import { Providers } from "./providers";

export default async function Layout({ children, params }: { children: React.ReactNode, params?: Promise<{ locale?: string }> }) {
	const awaitedParams = await params;
	const locale = awaitedParams?.locale ?? 'en-US';
	return (
		<html suppressHydrationWarning>
			<body>
				<Providers locale={locale}>
            <Navbar locale={locale} />
						{children}
				</Providers>
			</body>
		</html>
	);
}

