// # **Instructions**

// * Over the course of this activity you are going to be using constructors to create simplistic characters for use within a very basic Roleplaying Game (RPG)

// * Each character created using your constructor should have the following properties...

//   * Name: The character's name --> String

//   * Profession: What the character does for a living --> String

//   * Gender: The character's gender --> String

//   * Age: The character's age --> Integer

//   * Strength: Abstraction for how strong the character is --> Integer

//   * HitPoints (HP): Abstraction for how much health the character has --> Integer

//   * PrintStats: Function which prints all of a character's properties to the screen

//   * Once you have created your constructor, create two new characters and print their properties to the screen

//   * Fool around and get comfortable with your constructor before moving onto the next parts of the activity

// * Now that you feel comfortable with your constructor, it is time to start making this character creation system a little more reactive by adding in some more methods...

//   * IsAlive: Function which prints whether or not this character is alive by looking into their hitpoints and determining whether they are above or below zero.

//   * Attack: Function which takes in a second character's hitpoints and subtracts this character's strength from it.

//   * LevelUp: Function which increases this character's Age by 1, their Strength by 5, and their HitPoints by 25.

// * BONUS: After completing the previous sections and making sure they work, you now have everything you need to create a very basic RPG where two characters fight one another. Don't worry if you cannot finish this part of the activity as, by completing the above sections you are well on your way to mastering constructors!

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//********Teacher Solution*******
//constructor function which can take in a series of values and create objects
// with the properties contained inside
function Character(name, profession, gender, age, strength, hitpoints) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hitpoints = hitpoints;
  
    // method which prints all of the stats for a character
    this.printStats = function() {
      // for(var key in this) {
      //   if(typeof this[key] !== "function") {
      //     console.log(key + ": " + this[key]);
      //   }
      // }
      console.log(
      `Name: ${this.name}
      Profession: ${this.profession}
      Gender: ${this.gender}
      Age: ${this.age}
      Strength: ${this.strength}
      HitPoints:  ${this.hitpoints}
      -------------
  
      `);
    };
    // method which determines whether or not a character's "hitpoints" are less then zero
    // and returns true or false depending upon the outcome
    this.isAlive = function() {
      if (this.hitpoints > 0) {
        console.log(this.name + " is still alive!");
        console.log("\n-------------\n");
        return true;
      }
      console.log(this.name + " has died!");
      return false;
    };
  
    // method which takes in a second object and decreases their "hitpoints" by this character's strength
    this.attack = function(character2) {
      character2.hitpoints -= this.strength;
    };
  
    // method which increases this character's stats when called
    this.levelUp = function() {
      this.age += 1;
      this.strength += 5;
      this.hitpoints += 25;
    };
  }
  
  // INSTANTIATE creates two unique characters using the "character" constructor
  var warrior = new Character("Crusher", "Warrior", "Male", 25, 10, 75);
  var rogue = new Character("Dodger", "Rogue", "Female", 23, 20, 50);
  
  warrior.printStats();
  rogue.printStats();
  
  rogue.attack(warrior);
  warrior.printStats();
  warrior.isAlive();
  
  rogue.levelUp();
  rogue.printStats();
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// function Character(name, profession, gender, age, strength, hitpoints, printstats) {
//     this.name = name;
//     this.profession = profession;
//     this.gender = gender;
//     this.age = age;
//     this.strength = strength;
//     this.hitpoints = hitpoints;
//     this.printstats = 
// }

// function fighter = new Character(Mario, Plumber, Male, 33, 100, 0, PrintStats);

// console.log('Mario: ${this.name}');

// {/* function Avatar2(name, profession, gender, age, strength, HitPoints, PrintStats);
// function Avatar3(name, profession, gender, age, strength, HitPoints, PrintStats); */}

// {/* Avatar1.name = "AirWreck";

//   console.log('name: ${this.name}');

//   </script> */}