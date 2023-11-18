# daily-challenges

Simple website built for my partner to link to all the daily challenges (like Wordle etc.)

## Changelog

After making the initial, mobile first design I decided to make some changes to the site.

- Changed the colour scheme to Wordle's based on user feedback.
- Ran Google Lighthouse on the site to check accessibility. Mostly positive, but it instructed me to:
  - Add a meta description
  - Use the font display option to swap font on page load.
- Media query for desktop view

## To do

- Add a reset button
- Use local storage to:
  - Save button click state so page reload doesn't change it.
  - Reset button colour when new day
  - Button so people can add their own
  - use local storage to set and get whether link clicked and reset everyday
- Continue testing out things in test.js file
- Add pop up to explain what it is and how to use
- Font load on Chrome
- Add your own site button/option
