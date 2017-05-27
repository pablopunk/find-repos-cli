#!/usr/bin/env node

const repos = require('find-repos')
const args = require('args')

args
  .option('maxdepth', 'How deep the search gets', 3)
  .option('ignores', 'Paths to ignore', ['node_modules'])
  .option('help', 'Show help')
  .examples([
    {
      usage: 'find-repos',
      description: 'Find all repos starting from the current directory'
    },
    {
      usage: 'find-repos ~',
      description: 'Find all repos starting from your home folder'
    },
    {
      usage: 'find-repos repos/ -m 2 -i dist -i node_modules',
      description: 'Find all repos starting from "repos", ignoring paths containing *dist* or *node_modules*, and looking only 2 levels deep'
    }
  ])

const flags = args.parse(process.argv)

let baseDir = process.cwd()

if (args.sub[0]) {
  baseDir = args.sub[0]
}

repos({
  baseDir: baseDir,
  maxDepth: flags.maxdepth,
  ignores: flags.ignores
}).then(results => {
  results.map(r => console.log(r))
}).catch(() => {
  console.log('Error in arguments')
})