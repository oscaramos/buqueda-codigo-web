import prettier from 'prettier/standalone'
import prettierPluginJava from 'prettier-plugin-java'

export const formatCode = (code) => {
	return prettier.format(code, {
		parser: 'java',
		tabWidth: 2,
		plugins: [prettierPluginJava]
	})
}
