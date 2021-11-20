# github-project-highlight

The `github-project-highlight` is UserScript tools.  
In the case of using github project,  
this tool highlights the cards which was updated recently.

## Motivation

I wanted to know the card is updated, moved to column recently.  
In the case of using github project like daily scrum meeting,  
it has a lot of cards, and cards was changed status from members.  
It is difficult to check status of the cards and projects as soon as possible.
The purpose of this tool is to resolve the problem.

## Usage

Create Github API token.

To use this script, Install below to your browser:
- Firefox: [greasemonkey](https://addons.mozilla.org/ja/firefox/addon/greasemonkey/)
- Chrome: [tampermonkey](https://www.tampermonkey.net/)

Copy code of [main.js](./src/main.js) to userscript.

Change Settings in js code. (e.g. change `TOKEN` value to `github token` you got earlier)

Access to Your Github Project.
Then, the card will be highlighted if you updated it of the projects.

## LICENSE

This repository is licensed under [Apache 2.0](http://www.apache.org/licenses/LICENSE-2.0) License.  
See [License](./LICENSE) file.
