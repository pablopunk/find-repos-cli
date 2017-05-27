# find-repos-cli

<p align="center">
  Find git repos recursively from your command line
</p>

## Install

```bash
npm install --global find-repos-cli
```

## Usage

Use `find-repos -h` to display the following help:

```bash
Commands:
    help  Display help
  
  Options:
    -h, --help            Show help
    -H, --help            Output usage information
    -i, --ignores <list>  Paths to ignore (defaults to ["node_modules"])
    -m, --maxdepth <n>    How deep the search gets (defaults to 3)
    -v, --version         Output the version number
  
  Examples:
    - Find all repos starting from the current directory
    $ find-repos

    - Find all repos starting from your home folder
    $ find-repos ~

    - Find all repos starting from "repos", ignoring paths containing *dist* or *node_modules*, and looking only 2 levels deep
    $ find-repos repos/ -m 2 -i dist -i node_modules
```

## Related

The API for this module => [find-repos](https://github.com/pablopunk/find-repos)

## Author

| ![me](https://www.gravatar.com/avatar/fa50aeff0ddd6e63273a068b04353d9d?s=100) |
| ----------------------------------------------------------------------------- |
| © 2017 [Pablo Varela](https://twitter.com/pablopunk)                          |
