//First, I created a class called "PlayerCharacter"; it takes name & job as an argument

class PlayerCharacter {
    constructor (name, job) {
        this.name = name;
        this.job = job;

    //This is just to print out some information about the character.
    }
    describe() {
        return `${this.name} is a ${this.job}.`;
    }
}

//I then created a class called "Party"; in Dungeons & Dragons, a party is a group of player characters
    //It takes the name of the party only as an argument; it will also create an array that includes all the characters in the party
class Party {
    constructor(name) {
        this.name = name; 
        this.characters = [];
    }
    //This prevents the person from inputtign something that is not a player character, like a string or a nubmer
    addPlayerCharacter(character) {
        if (character instanceof PlayerCharacter) {
            this.characters.push(character);
        } else {
            //This message and string will tell the user exactly what they did wrong.
        throw new Error(`You can only add an instance of Player Character. Argument is not a Player Character: ${character}`);
        }
    }
    //This prints out the name of the party, and how many characters are part of it.
describe() {
    return `${this.name} has ${this.characters.length} party members.`;
    }
}

//This creates a "menu"; a list of all our options 
    //As you can see, I created an array called "parties", and made it empty by using "null" 
        //which makes it so no parties are selected initially
class Menu {
    constructor() {
        this.parties = [ ];
        this.selectedParty = null;
    }
//Here we are creating menu methods that actually don't exist yet...
    //because afterwards we will be implementing these methods in our code (this is called a "top > down development approach")
    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            //Here we are determining what the user has selected, and initiating the result
            switch (selection) {
                case '1':
                    this.createParty();
                    //As of right now, "createParty" is just a placeholder that we will later implement
                    break;
                case '2':
                    this.viewParty();
                    break;
                case '3':
                    this.deleteParty();
                    break;
                case '4':
                    this.displayParties();
                    break;
                //by writing "default", we make it so if they try to select anything else, nothing is selected
                default:
                    selection = 0;
            }
        //This will make it keep looping unless they have selected 0 (which is "exit").
        selection = this.showMainMenuOptions();
        }
    //And if they did select "0", they are now outside of the loop. Therefore, it will display the following alert:
    alert ('Goodbye!');
    }

    //Now we will implement some of the other methods we referenced earlier, but have not fully written out the code.
    showMainMenuOptions() {
        //We use a template literal to make it easier to format our menu.
        return prompt(`
        0) exit
        1) create new party
        2) view party
        3) delete party
        4) display all parties
        `);
    }

    showPartyMenuOptions(partyInfo) {
        return prompt(`
            0) exit
            1) create character
            2) delete character
            ----------------------------
            ${partyInfo}
         `);
    }

    displayParties() {
        let partyString = '';
        for (let i = 0; i < this.parties.length; i++) {
            partyString += i + ') ' + this.parties[i].name + '\n';
        }
        alert(partyString);
    }
    
    createParty() {
        let name = prompt('Enter name for party:');
        this.parties.push(new Party(name));
     }

    viewParty() {
        let index = prompt('Enter the index of the party you wish to view:');
        if (index > -1 && index < this.parties.length) {
            this.selectedParty = this.parties[index];
            let description = 'Party Name: ' + this.selectedParty.name + '\n';
            
            for (let i = 0; i < this.selectedParty.characters.length; i++) {
                description += i + ') ' + this.selectedParty.characters[i].name 
                + ' - ' + this.selectedParty.characters[i].job + '\n';
            }
        }
            
            let selection = this.showPartyMenuOptions(description)
            switch (selection) {
                case '1': 
                    this.createCharacter();
                    break;
                case '2':
                    this.deleteCharacter();
            }

        }

        deleteParty() {
            let index = prompt('Enter the index of the party you wish to delete"');
            if (index > -1 && index < this.parties.length) {
                this.parties.splice(index, 1);
            }
        }

    createCharacter() {
        let name = prompt('Enter name for new character:');
        let job = prompt('Enter job class for new player');
        this.selectedParty.characters.push(new Character(name, job));
    }

    deleteCharacter() {
        let index = prompt('Enter the index of the character you wish to delete:');
        if (index > -1 && index < this.selectedParty.characters.length) {
            this.selectedParty.characters.splice(index, 1);
        }
    }
}

//This piece of code makes our menu actually functional!!
let menu = new Menu();
menu.start();
