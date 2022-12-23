# SINGH FIGHTER

Uses the Math.random() and Math.floor() functions to generate an integer and render two characters from an array of objects in a Street Fighter II matchup splash screen. Characters are based on my friends and family.

We're also using getElementById() to grab 'img' and 'p' elements so we can update player names and images. Images are updated using the .src attribute and names are updated using .textContent.

A while loop checks to see if the integer used to pick a character from the character array is the same for player1 and player2. If both picked the same character, player2 re-rolls, to avoid mirror matches.