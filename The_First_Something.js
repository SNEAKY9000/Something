class Something_Else extends Player{


  // fair enough i suppose
  /*wells is a 12 element int array of the number of pieces in each space (shown below)
  S1 and S2 are the player's stores, which decides the score for each player.
 
                      ||  Opponent
                      \/      
           +====================================+
           |    | 11 | 10 | 9  | 8 | 7 | 6 |    |
           | S2 |==========================| S1 |
           |    | 0  | 1  | 2  | 3 | 4 | 5 |    |
           +====================================+
                                /\
                        Player  ||
  */
  //write your bot here
  getMove(wells, store1, store2){

    let result = 0;
    
    if (wells[5] >= 1){
      result = 5
    }
    else if (wells[4] >= 1){
      result = 4
    }
    else if (wells[3] >= 1){
      result = 3
    }
    else if (wells[2] >= 1){
      result = 2
    }
    else if (wells[1] >= 1){
      result = 1
    }
    else if (wells[0] >= 1){
      result = 0
    }
    
    if (wells[5] == 1){
      return 5
    }
    if (wells[4] == 2){
      return 4
    }
    if (wells[3] == 3){
      return 3
    }
    if (wells[2] == 4){
      return 2
    }
    if (wells[1] == 5){
      return 1
    }
    if (wells[0] == 6){
      return 0
    }

    if (wells[5] >= 8){
      return 5
    }
    if (wells[4] >= 9){
      return 4
    }
    if (wells[3] >= 10){
      return 3
    }
    if (wells[2] >= 11){
      return 2
    }
    if (wells[1] >= 12){
      return 1
    }
    if (wells[0] >= 13){
      return 0
    }
    
    let count = 0;
    let maxCount = 0;
    let test = result;

    let wellsNew = wells;

    for (let tester = result; tester >= 0; tester -= 1){
      let holder = tester;
      
      while (wellsNew[tester] >= 1){
        
        tester += wellsNew[tester];
        count += 1;
        
        for (limit = holder; limit <= tester; limit += 1){
          if (limit = tester && limit != 6){
            wellsNew[tester] += 1;
          }
          else if(limit == 6){
            tester -= 1;
            if (tester < 6){
              break
            }
            else{
              wellsNew[limit] = 1;
            }
          }
          else if(limit > 11){
            tester -= 12;
            limit -= 12;
            wellsNew[limit] = 1;
          } 
        }
      }
      
      if (maxCount <= count){
        maxCount = count;
        test = holder;
      }
      
      tester = holder;
      wellsNew = wells;
      count = 0;
    }
    
    return test
  }
 
 
}
