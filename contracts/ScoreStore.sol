pragma solidity ^0.4.21;

contract ScoreStore {
    mapping (string=>int) PersonScores;

    function addPersonScore(string name, int startingScore) public {

        if (PersonScores[name] > 0) {
            revert();
        }
        
        PersonScores[name] = startingScore;
 
    }

    function getScore(string name)  view public returns (int) {
        return PersonScores[name];
    }

}