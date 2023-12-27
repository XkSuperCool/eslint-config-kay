import chalk from 'chalk'
import { readFileSync } from 'fs'
import path from 'path'

const msgPath = path.resolve('.git/COMMIT_EDITMSG')
const msg = readFileSync(msgPath, 'utf-8').trim()

const commitRE =
  /^(revert: )?(feat|fix|docs|style|refactor|perf|build|chore|release)(\(.+\))?: .{1,50}/

if (!commitRE.test(msg)) {
  console.error(
    `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(
      `invalid commit message format.`
    )}\n\n` +
      chalk.red(
        `  Proper commit message format is required for automated changelog generation. Examples:\n\n`
      ) +
      `    ${chalk.green(`feat(workflow): add 'comments' option`)}\n` +
      `    ${chalk.green(
        `fix(generator): handle events on blur (close #28)`
      )}\n\n` +
      chalk.red(`  See https://www.conventionalcommits.org/zh-hans/v1.0.0/ \n`)
  )
  process.exit(1)
}
