import { it, expect } from 'vitest'
import rule from './vue-jsx-interpolation-spacing'
import { RuleTester } from '@typescript-eslint/utils/dist/ts-eslint'

it('test jsx-interpolation-spacing', () => {
  const ruleTester: RuleTester = new RuleTester({
    parser: require.resolve('@typescript-eslint/parser'),
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      }
    }
  })

  expect(() => {
    ruleTester.run('jsx-interpolation-spacing 1', rule, {
      valid: ['function render() { return <div>{ a }</div> }'],
      invalid: [
        {
          code: '<div>{b }</div>',
          output: '<div>{ b }</div>',
          errors: [{ messageId: 'expectedSpaceBefore' }]
        }
      ]
    })
  }).not.toThrowError()

  expect(() => {
    ruleTester.run('jsx-interpolation-spacing 2', rule, {
      valid: ['function render() { return <div>{ a }</div> }'],
      invalid: [
        {
          code: '<div>{ b}</div>',
          output: '<div>{ b }</div>',
          errors: [{ messageId: 'expectedSpaceAfter' }]
        }
      ]
    })
  }).not.toThrowError()

  expect(() => {
    ruleTester.run('jsx-interpolation-spacing 3 ', rule, {
      valid: ['function render() { return <div>{ a }</div> }'],
      invalid: [
        {
          code: '<div>{b}</div>',
          output: '<div>{ b }</div>',
          errors: [{ messageId: 'expectedSpaceBefore' }, { messageId: 'expectedSpaceAfter' }]
        }
      ]
    })
  }).not.toThrowError()

  expect(() => {
    ruleTester.run('jsx-interpolation-spacing', rule, {
      valid: ['function render() { return <div>{ a }</div> }'],
      invalid: [
        {
          code: '<div>{  b }</div>',
          output: '<div>{ b }</div>',
          errors: [{ messageId: 'expectedSpaceBefore' }]
        }
      ]
    })
  }).not.toThrowError()

  expect(() => {
    ruleTester.run('jsx-interpolation-spacing', rule, {
      valid: ['function render() { return <div>{ a }</div> }'],
      invalid: [
        {
          code: '<div>{ b   }</div>',
          output: '<div>{ b }</div>',
          errors: [{ messageId: 'expectedSpaceAfter' }]
        }
      ]
    })
  }).not.toThrowError()


  expect(() => {
    ruleTester.run('jsx-interpolation-spacing', rule, {
      valid: ['function render() { return <div>{ a }</div> }'],
      invalid: [
        {
          code: '<div>{    b     }</div>',
          output: '<div>{ b }</div>',
          errors: [{ messageId: 'expectedSpaceBefore' }, { messageId: 'expectedSpaceAfter' }]
        }
      ]
    })
  }).not.toThrowError()

  expect(() => {
    ruleTester.run('jsx-interpolation-spacing', rule, {
      valid: ['<div>{/* <div>{ b }</div> */}</div>'],
      invalid: []
    })
  }).not.toThrowError()
})
