# Color Therapy

A board game that challenges your memory.<br>

# Game Pitch

Good memory is essential for independent living, staying focused and completing tasks.Research has now proven the link between the use of colors and improving memory. Color therapy uses colors that stimulate the limbic area of the brain, which deals with retention. This game is based on a book called Improving Memory Through Creativity by Amanda Pike, talks of a study on 91 older adults from different countries who were administered art therapy for 10 weeks. At the end of the study, the experimental group reported improved cognitive skills compared to the control group.



# Play the game here:
https://ninambash.github.io/Poject1-COLOR-THERAPY/

# Wireframe
![wireframe](./wireframe.png)

# Tech stack
HTML<br>
CSS<br>
JavaScript<br>
Vanilla DOM<br>
# post
I used 12.5% HTML, 24.3% CSS and 63.2% javaScript <br>

# MVP Goals
Start button to start playing the game.<br>
Have 4 boxes in a board.<br>
Add set Timer function to make colors move from one box to the other.<br>
Add event listeners for a player to click the colors they saw.<br>
Start the game with memorising two colors then advancing to more colors as the player keeps getting better.<br>
Change the H1 to update the player to reflect correct or not correct.<br>
Add win function to check if the player picked the correct colors.<br>
Make start button disappear when the player starts playing and re-appear when the round is over.<br>
Make a function for reset button to restart the game as opposed to reload <br>

# stretch goals
Make colors move faster by decreasing the timer as the player gets better at the game.<br>
Have user log in to continue where they left off and keep score of that paticular user to continue the next time they log in.<br>
Have a separate link for rules of the game as opposed to displaying on the same page. <br>
Adding media querries.<br>
Adding levels to the game.<br>
Adding more interractions to the game.

# potential roadblocks
Style the board to look nicer<br>

# approach taken
I started with a reviewing the topics I had learned, did some research about the game in mind.<br>
When i decided on the game, I wanted to focus on the interaction of the game to create a fun user experience.<br>
I proceeded to draft a wireframe to use it as a visual of my UI.<br>
I wrote a pseudocode of what I wanted to add to the game. <br>
I began the project using HTML, then added CSS and Javacripts.<br> 
I completed with gradually incrementing the functionality of the game testing and refrencing on my psudo code and wireframe.<br>
# Steps taken
In the global scope! I connected DOM elements refferencing them from html, created Array for all the needed colors<br> 
I added 4 arrays one for the computer called gameclicks, one for the user called user clicks, set the inplay to false so that we have the ability to disable the game,
and last one for the number of colors I want the computer to start with.<br>
Added a start function and connected it to the event listener<br>
function set up created a div with 4 boxes loop through the boxes listen for clicks<br>
run sequence function<br>
check answer function for a win <br>
end game function <br>
reset function<br>


# Deployed link
https://ninambash.github.io/Poject1-COLOR-THERAPY/


#  Post-project reflection 
I am working on media querries for better styling of my projects.<br>
Centering my objects was a big challange<br>
This project solidified some concepts in JavaScript that were still bumpy<br>
Taking a break and come back with a fresh mind.<br>
# Sources used
Algorithm for random number<br>
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random<br>

This method returns a string representing the specified number value.<br>
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString<br>

Book: Improving Memory Through Creativity<br>



