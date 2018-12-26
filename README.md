# Thanks to Leave Bot - Slack Bot

[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE.txt)

参加したチャネルを去った人にDMでお礼を言ってくれるBOTです。
[このツイートのSlackチャネル運用](https://twitter.com/june29/status/1075641033499635712)を実現するときのお供としてご利用ください。
詳しくは[コチラ](https://blog.rocky-manobi.com/entry/2018/12/26/150402);

## Usage

### Requirements

* node.js (8.x or later) / npm
* slack app token( see (slack app document)[https://api.slack.com/bot-users] )

### how to run

```bash
git clone git@github.com:rockymanobi/thanks-to-leave-bot.git
cd thanks-to-leave-bot
npm i
SLACK_TOKEN={your slack token} npm start
```

# License

This software is released under the MIT License, see LICENSE.txt.

Copyright (c) 2018 Takanori Koroki
