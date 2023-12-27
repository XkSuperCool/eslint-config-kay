import { createEslintRule } from '../utils'
import { AST_NODE_TYPES } from '@typescript-eslint/types'

type MessageIds = 'expectedSpaceAfter' | 'expectedSpaceBefore'

const OneSpacing = 1

export default createEslintRule<[], MessageIds>({
	name: 'jsx-interpolation-spacing',
	meta: {
		type: 'problem',
		docs: {
			description: 'enforce unified spacing in jsx interpolations',
			recommended: 'error'
		},
		fixable: 'whitespace',
		schema: [],
		messages: {
			expectedSpaceAfter: "Expected 1 space after '{', but not found.",
      expectedSpaceBefore: "Expected 1 space before '}', but not found.",
		}
	},
	defaultOptions: [],
	create: (context) => {
		return {
			JSXExpressionContainer(node) {
        const { range, expression } = node

				if (expression.type === AST_NODE_TYPES.JSXEmptyExpression) {
					return
				}

        if (expression.range[0] - OneSpacing - range[0] === 0) {
          context.report({
            node,
            messageId: 'expectedSpaceBefore',
            fix(fixer) {
							return fixer.insertTextBefore(node.expression, ' ')
            }
          })
        }

				if (range[1] - OneSpacing - expression.range[1] === 0) {
					context.report({
            node,
            messageId: 'expectedSpaceAfter',
            fix(fixer) {
							return fixer.insertTextAfter(node.expression, ' ')
            }
          })
				}

				if (expression.range[0] - OneSpacing - range[0] > 1) {
					context.report({
            node,
            messageId: 'expectedSpaceBefore',
            fix(fixer) {
							return fixer.removeRange([range[0] + 2, expression.range[0]])
            }
          })
				}

				if (range[1] - OneSpacing - expression.range[1] > 1) {
					context.report({
            node,
            messageId: 'expectedSpaceAfter',
            fix(fixer) {
							return fixer.removeRange([expression.range[1], range[1] - 2])
            }
          })
				}
      }
		}
	}
})
