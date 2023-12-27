import { createEslintRule } from '../utils'

type MessageIds = 'noTemplateCurlyInStringFix'

export default createEslintRule<[], MessageIds>({
	name: 'no-template-curly-in-string-fix',
	meta: {
		type: 'problem',
		docs: {
			description: 'no-template-curly-in-string fix',
			recommended: 'error'
		},
		fixable: 'code',
		schema: [],
		messages: {
			noTemplateCurlyInStringFix: 'Fixed no-template-curly-in-string'
		}
	},
	defaultOptions: [],
	create: (context) => {
		return {
			Literal(node) {
				if (typeof node.value === 'string' && /\$\{.*?\}/.test(node.value)) {
					context.report({
						node,
						messageId: 'noTemplateCurlyInStringFix',
						fix(fixer) {
							return fixer.replaceText(node, '`' + node.value + '`')
						}
					})
				}
			}
		}
	}
})
