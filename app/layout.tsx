'use client'
import Navbar from '@/components/Navbar';
import { ClientProviders } from './providers';
import StyledComponentsRegistry from './registry';
import { LayoutContainerStyle } from '@/styles/rootStyle';

export default function RootLayout({
	// Layouts must accept a children prop.
	// This will be populated with nested layouts or pages
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<head>
				<link rel='manifest' href='/manifest.json' crossOrigin='use-credentials' />

				<meta name='application-name' content='Node Guardians' />
				<meta name='theme-color' content='#151515' />
			</head>

			<body suppressHydrationWarning={true}>
				<StyledComponentsRegistry>
					<ClientProviders>
						<LayoutContainerStyle>
							<Navbar />
							{children}
						</LayoutContainerStyle>
					</ClientProviders>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
