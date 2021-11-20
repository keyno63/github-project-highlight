# github-project-highlight

[![Node CI](https://github.com/keyno63/github-project-highlight/actions/workflows/ci.yaml/badge.svg)](https://github.com/keyno63/github-project-highlight/actions/workflows/ci.yaml)

The `github-project-highlight` is UserScript tools.  
In the case of using GitHub project,  
this tool highlights the cards which was updated recently.

## Motivation

I wanted to know the card is updated, moved to column recently.  
In the case of using GitHub project like daily scrum meeting,  
it has a lot of cards, and cards was changed status from members.  
It is difficult to check status of the cards and projects as soon as possible.
The purpose of this tool is to resolve the problem.

## Usage

At the beginning, create [GitHub API token](https://github.com/settings/tokens).  
This tool to access to [GitHub API](https://docs.github.com/en/rest/reference/projects#get-a-project-card) for getting status of GitHub project cards.

In the next place, set up your browser to use this script.  
Install below:
- Firefox: [greasemonkey](https://addons.mozilla.org/ja/firefox/addon/greasemonkey/)
- Chrome: [tampermonkey](https://www.tampermonkey.net/)

Copy code of [main.js](./src/main.js) to userscript.

Change Settings in js code. (e.g. change `TOKEN` value to `github token` you got earlier)

Access to Your Github Project.
Then, the card will be highlighted if you updated it of the projects.

## Limitations of Function.

This tool can not reflect status while browsing the project automatically. (It is commented out.)  
If we observe the updated status used by `MutationObserver`,  
it will create a lot of request (probably, GitHub Project frequently update html using `include-fragment-element`).  
Then, this tool does not observe the dom.

If you want to use this function, on your own responsibility.  

## LICENSE

This repository is licensed under [Apache 2.0](http://www.apache.org/licenses/LICENSE-2.0) License.  
See [License](./LICENSE) file.
