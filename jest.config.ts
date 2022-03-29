export default {
	clearMocks: true,
	coverageProvider: 'v8',
	setupFilesAfterEnv: ['<rootDir>/src/test/setup.ts'],
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.(t|j)sx?$': [
			'@swc/jest',
			{
				jsc: {
					parser: {
						syntax: 'typescript',
						tsx: true,
						decorators: true,
					},
					keepClassNames: true,
					transform: {
						legacyDecorator: true,
						decoratorMetadata: true,
						react: {
							runtime: 'automatic',
						},
					},
				},
				module: {
					type: 'es6',
					noInterop: false,
				},
			},
		],
	},
};
