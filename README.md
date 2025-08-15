# Daily Challenges

Website to link to all the daily challenges (like Wordle etc.).

## How I Built It

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
- Added an intro screen, like on [Wordle](https://www.nytimes.com/games/wordle/index.html) to explain what the website is about. Stored in local storage whether this has been clicked - if it has ever (i.e. not just today), don't show the popup again.
- Improved desktop css to show all the content.
- Added animations using [Animista](https://animista.net).
- Decided to move to Next.js to add more functionality.
- Used [drag and drop kit to make the buttons drag and droppable](https://docs.dndkit.com/presets/sortable)
