import hljs from 'highlight.js/lib/core'
import java from 'highlight.js/lib/languages/java'

hljs.registerLanguage('java', java)

export const highlightCode = (code) => {
	return hljs.highlight('java', code)
}
