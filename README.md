# daily-challenges

Simple website to link to all the daily challenges (like Wordle etc.)

## Changelog

After making the initial design I decided to make some changes to the site.

- Changed the colour scheme to Wordle's based on user feedback.
- Ran Google Lighthouse on the site to check accessibility. Mostly positive, but it instructed me to:
  - Add a meta description
  - Use the font display option to swap font on page load.
- Media query for desktop view. I originally designed for mobile which made things too big for desktop. Bizarrely I used vw for the font sizes so I changed that too.
- Added a reset button.
- Used local storage to save button click state so page reload doesn't change it and reset button colour when new day.
- Edited the CSS to make it look better on different screen sizes.
- Added view on Github button
- Ran Google Lighthouse to check the accessibility of the site and got a report with 100 for all categories. ![Lighthouse report for the site showing full 100% on all categories](image.png)
- Deleted some challenges from the website to streamline it for new users. Added the excellent Hexcodle, a useful tool for developers learning about hexcodes and base-16.
- Added landmarks to improve accessibility.
-

## To do later:

- Popup like wordle to show what this website is about.
- Add to home screen button
- Improve desktop ui - maybe two columns or force it to be mobile view.
- Button so people can add their own
