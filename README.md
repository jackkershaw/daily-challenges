# daily-challenges

Simple website built for my partner to link to all the daily challenges (like Wordle etc.)

## Changelog

After making the initial design I decided to make some changes to the site.

- Changed the colour scheme to Wordle's based on user feedback.
- Ran Google Lighthouse on the site to check accessibility. Mostly positive, but it instructed me to:
  - Add a meta description
  - Use the font display option to swap font on page load.
- Media query for desktop view. I originally designed for mobile which made things too big for desktop. Bizarrely I used vw for the font sizes so I changed that too.
- Added a reset button.
- Used local storage to save button click state so page reload doesn't change it and reset button colour when new day.
-

## To do

- Add pop up to explain what it is and how to use, like on Wordle.
- Button so people can add their own
  - <button class="noColorChange">
      <input type="text" placeholder="Add your own site" />
    </button>
- Add to home screen button
