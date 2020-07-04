import prettier from 'prettier/standalone'
import prettierPluginJava from 'prettier-plugin-java'

// Without these hacks, it would crash
const putInsideClassScope = code => `public class Prettier {${code}}`
const removeFromClassScope = formattedCode => formattedCode.split('\n').slice(2, -2).join('\n')

export const formatCode = (code) => {
	try {
		const codeInClass = putInsideClassScope(code)
		const formattedCode = prettier.format(codeInClass, {
			parser: 'java',
			tabWidth: 2,
			plugins: [prettierPluginJava]
		})
		return removeFromClassScope(formattedCode)
	} catch (e) {
		console.log(e)
		return code
	}
}
