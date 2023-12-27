import { it, expect } from 'vitest'
import rule from './no-template-curly-in-string-fix'
import { RuleTester } from '@typescript-eslint/utils/dist/ts-eslint'

it('test no-template-curly-in-string-fix', () => {
	const ruleTester: RuleTester = new RuleTester({
    parser: require.resolve('@typescript-eslint/parser'),
  })

	expect(() => {
		ruleTester.run('no-template-curly-in-string-fix', rule, {
			valid: ['const txt = `text${text}`'],
			invalid: [
				{
					code: 'const txt = "text${text}"',
					output: 'const txt = `text${text}`',
					errors: [{ messageId: 'noTemplateCurlyInStringFix' }]
				},
				{
					code: "const txt = 'text${text}'",
					output: 'const txt = `text${text}`',
					errors: [{ messageId: 'noTemplateCurlyInStringFix' }]
				}
			],
		})
	}).not.toThrowError()
})

