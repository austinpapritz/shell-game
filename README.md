## Shell Game README

Code Quality / Grading Requirements
[X] Open PR from dev to main with your changes
[X] Preview deploy from Netlify showing on your PR
[] Clear commit history
[] Good naming conventions and code is easy to read
[] Effective use of CSS and semantic HTML

Code Requirements
[] On clicking a hiding place button, the total number of guesses increment
[] On clicking the correct shell button, the total number of correct guesses increment
[] On clicking the incorrect shell button, the number of incorrect guesses increments
[] On click, see the ball revealed, clearing out the previous correct guess style
[] displayResults function for displaying the updated state
[] reset function for resetting the styles that display the correct location

HTML

[x] 3 Shell containers
[x] 3 <img>
[x] 3 pearls
[x] x3 <button></button>
[x] Scoreboard: total, wins, losses

States
[X] let guessTotal guessWin

[] Events
[] button click
[] randomly choose location
[] classList.add pearl at chosen location / transform Shell -100px
[] Scoreboard update: total, wins, losses
[] Reset
