# Axelrod.js

An [Axelrod's Iterative Prisoner's Dilemma tournament](https://en.wikipedia.org/wiki/The_Evolution_of_Cooperation#Axelrod.27s_tournaments) simulator for NPM.

(Tl;dr for Axelrod's tournament - in Prisoner's Dilemma, you want the lowest score. In iterative Prisoner's Dilemma, you want the lowest score after playing the same rival again and again.

Axelrod's tournament plays several strategies against each other, with the strategy that won most games - i.e. got the least points in most matches against other strategies - winning the tournament).

### Dependencies (installed via `npm install`)
- Gulp
- Gulp-babel 

### Usage
    node axelrod.js 
    [-p, --plays (int >= 1) number of plays in each game between strategies]
    [-r, --rounds (int >= 1) number of rounds in the tournament]
    [-o, --output outputFileName] 
    [-s, --strategies [strategyName1, strategyName2...]]
    [-h, --help (shows this message)]
    [-v, --verbose (true/false)]

Note that strategy names must correspond to strategies available at `src/sample_strategies` or `src/custom_strategies` - i.e. strategies whose implementations are available. 

If a strategy name is provided and it does not exist in either of these directories, it will not be utilized; if no proper strategy names are supplied, the strategies from default mode will be played instead (see below).
### Available sample strategies

- Always-cooperate: always cooperates (does not snitch). If both players utilize this strategy, they each receive 1 point per play.
- Always-defect: always defects (snitches on the other 'prisoner'). If both players utilize this strategy, they each receive 2 points; however, if one player cooperates and the other defects, the defecting player receives 0 points, while the cooperating player receives 3 points.
- Random: chooses between defecting and cooperating randomly (50% chance for each).
- Tit-for-tat: if it's the first turn, the strategy cooperates. Otherwise, it looks at what the rival player did in his previous turn, and does that.
- Go-by-majority: if it's the first turn, the strategy cooperates. Otherwise, it looks at what the rival player did most in all previous turns, and does that.
- Go-against-majority: similar to go-by-majority, only it does the opposite of what the rival player did most.
    
### Default mode
Simply calling `node axelrod.js` will run a:
- 200-plays, single round tournament 
- between the always-cooperate, always-defect, random and tit-for-tat strategies, 
- with verbose output (detailing for each play, each move made by each player, and the winner for each game and the total tournament)
- which will be written to the console, rather than an output file.
    
### Create your own strategy!
The simulator allows you to create your own strategies for the players, by creating a proper `strategyName.js` file and putting it in the `src/custom_strategies` folder. (An example of a created strategy can be found in `src/custom_strategies/TemplateStrategy.js`)
 
### How to run
- `npm install`
- `gulp build`
- `node axelrod.js`

