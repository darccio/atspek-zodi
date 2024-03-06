# Atspėk žodį

A daily online puzzle game to guess a secret word. Made using React, Typescript, and Tailwind.

```
WORDS[Math.floor((NOW_IN_MS - GAME_EPOCH_IN_MS) / ONE_DAY_IN_MS)]
```

React enabled me to componentize the littlest parts of the game - keys and letter cells - and use them as the building blocks for the keyboard, word grid, and winning solution graphic. As for handling state, I used the built in useState and useEffect hooks to track guesses, whether the game is won, and to conditionally render popups.

In addition to other things, Typescript helped ensure type safety for the statuses of each guessed letter, which were used in many areas of the app and needed to be accurate for the game to work correctly.

I implemented Tailwind mostly because I wanted to learn how to use Tailwind CSS, but I also took advantage of [Tailwind UI](https://tailwindui.com/) with their [headless package](https://headlessui.dev/) to build the modals and notifications. This was such an easy way to build simple popups for how to play, winning the game, and invalid words.

_To Run Locally:_
Clone the repository and perform the following command line actions:

```bash
$> cd atspek-zodi
$> npm install
$> npm run start
```

_To build/run docker container:_

```bash
$> docker build -t atspek-zodi:dev -f docker/Dockerfile .
$> docker run -d -p 3000:3000 --name atspek-zodi-dev atspek-zodi:dev
```

Open [http://localhost:3000](http://localhost:3000) in browser.

#### Production

```bash
$> docker build --target=prod -t atspek-zodi:prod -f docker/Dockerfile .
$> docker run -d -p 80:8080  --name atspek-zodi-prod atspek-zodi:prod
```

Open [http://localhost](http://localhost) in browser. See the [entry in the FAQ](#why-does-sharing-of-results-not-work) below about requirements for sharing of results.

## FAQ

### How can I change the length of a guess?

The default configuration is for solutions and guesses of length five, but it is flexible enough to handle other lengths, even variable lengths each day.

To configure for a different constant length:

- Update the `WORDS` array in [src/constants/wordlist.ts](src/constants/wordlist.ts) to only include words of the new length.
- Update the `VALID_GUESSES` array in [src/constants/validGuesses.ts](src/constants/validGuesses.ts) to only include words of the new length.

To configure for variable lengths:

- Update the `WORDS` array in [src/constants/wordlist.ts](src/constants/wordlist.ts) to include words of any of the variable lengths desired.
- Update the `VALID_GUESSES` array in [src/constants/validGuesses.ts](src/constants/validGuesses.ts) to include words of any of the variable lengths desired.

Note that guesses are validated against both the length of the solution, and presence in VALID_GUESSES.

### How can I create a version in another language?

- In [.env](.env):
  - Update the title and the description
  - Set the `REACT_APP_LOCALE_STRING` to your locale
- In [public/index.html](public/index.html):
  - Update the "You need to enable JavaScript" message
  - Update the language attribute in the HTML tag
  - If the language is written right-to-left, add `dir="rtl"` to the HTML tag
- Update the name and short name in [public/manifest.json](public/manifest.json)
- Update the strings in [src/constants/strings.ts](src/constants/strings.ts)
- Add all of the five letter words in the language to [src/constants/validGuesses.ts](src/constants/validGuesses.ts), replacing the English words
- Add a list of goal words in the language to [src/constants/wordlist.ts](src/constants/wordlist.ts), replacing the English words
- Update the "Settings" modal in [src/components/modals/SettingsModal.tsx](src/components/modals/SettingsModal.tsx)
- Update the "Info" modal in [src/components/modals/InfoModal.tsx](src/components/modals/InfoModal.tsx)
- Update the "DatePicker" modal in [src/components/modals/DatePickerModal.tsx](src/components/modals/DatePickerModal.tsx)
- Update the statistics migration components modal in:
  - [src/components/stats/MigrationIntro.tsx](src/components/stats/MigrationIntro.tsx)
  - [src/components/stats/EmigratePanel.tsx](src/components/stats/EmigratePanel.tsx)
  - [src/components/stats/ImmigratePanel.tsx](src/components/stats/ImmigratePanel.tsx)
  - [src/components/modals/MigrateStatsModal.tsx](src/components/modals/MigrateStatsModal.tsx)
- To ensure that migration codes are unique to your application, update the Blowfish encryption key and initialization vector with random 30 character and 8 character strings in [src/constants/settings.ts](src/constants/settings.ts)
- If the language has letters that are not present in English update the keyboard in [src/components/keyboard/Keyboard.tsx](src/components/keyboard/Keyboard.tsx)
- If the language is written right-to-left, prepend `\u202E` (the unicode right-to-left override character) to the return statement of the inner function in `generateEmojiGrid` in
  [src/lib/share.ts](src/lib/share.ts)
- To enable replaying past days' games, set `ENABLE_ARCHIVED_GAMES` to `true`
- Set `DATE_LOCALE` to a suitable locale string as defined in [date-fns](https://github.com/date-fns/date-fns/tree/main/src/locale).

### Why does sharing of results not work?

For mobile and wearable devices and smart TVs, sharing of results is initially attempted using the [Web Share API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API). For other devices or when sharing to the Web Share API fails, the results are written to the clipboard. Both these methods will succeed only in a [secure context](https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts), which require you to implement the HTTPS protocol when hosting this repo on a public domain.
