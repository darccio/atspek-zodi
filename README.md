# ***REMOVED*** 🇱🇹

- Play it [here](https://da.rio.hn/***REMOVED***)
- Go play the real ***REMOVED*** [here](https://www.powerlanguage.co.uk/***REMOVED***/)
- Read the story behind it [here](https://www.nytimes.com/2022/01/03/technology/***REMOVED***-word-game-creator.html)
- Try the original clone project [here](https://***REMOVED***.hannahmariepark.com)

This repository is an adaptation in Lithuanian of the [open source clone](https://github.com/hannahcode/***REMOVED***) of the immensely popular online word guessing game ***REMOVED***.

**Original README**

_Inspiration_:
Like many others all over the world, I saw the signature pattern of green, yellow, and white squares popping up all over social media and the web and had to check it out. After a few days of play, I decided it would be great for my learning to try to rebuild ***REMOVED*** in React!

_Design Decisions:_
A combination of React, Typescript, and Tailwind was used to build this ***REMOVED*** Clone. When examining the original ***REMOVED***, I assumed the list might come from an external API or database, but after investigating in chrome dev tools I found that the list of words is simply stored in an array on the front end. I'm using the same list as the OG ***REMOVED*** uses, but watch out for spoilers if you go find the file in this repo! The word match functionality is simple: the word array index increments each day from a fixed game epoch timestamp (only one puzzle per day!) roughly like so:

```
WORDS[Math.floor((NOW_IN_MS - GAME_EPOCH_IN_MS) / ONE_DAY_IN_MS)]
```

React enabled me to componentize the littlest parts of the game - keys and letter cells - and use them as the building blocks for the keyboard, word grid, and winning solution graphic. As for handling state, I used the built in useState and useEffect hooks to track guesses, whether the game is won, and to conditionally render popups.

In addition to other things, Typescript helped ensure type safety for the statuses of each guessed letter, which were used in many areas of the app and needed to be accurate for the game to work correctly.

I implemented Tailwind mostly because I wanted to learn how to use Tailwind CSS, but I also took advantage of [Tailwind UI](https://tailwindui.com/) with their [headless package](https://headlessui.dev/) to build the modals and notifications. This was such an easy way to build simple popups for how to play, winning the game, and invalid words.

_To Run Locally:_
Clone the repository and perform the following command line actions:

```bash
$ cd ***REMOVED***
$ npm install
$ npm run start
```

_To build/run docker container:_

```bash
$ docker build -t not***REMOVED*** .
$ docker run -d -p 3000:3000 not***REMOVED***
```

open http://localhost:3000 in browser.
