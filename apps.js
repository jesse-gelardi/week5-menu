console.log('Hello!');

class PlayerCharacter {
    constructor (name, job) {
        this.name = name;
        this.job = job;
    }
    describe() {
        return `${this.name} is a ${this.job}.`;
    }
}

class Party {
    constructor(name) {
        this.name = name; 
        this.characters = [];
    }

    addPlayerCharacter(character) {
        if (character instanceof PlayerCharacter) {
            this.characters.push(character);
        } else {
        throw new Error(`You can only add an instance of Player Character. Argument is not a Player Character: ${character}`);
        }
    }
describe() {
    return `${this.name} has ${this.characters.length} party members.`;
    }
}

class Menu {
    constructor() {
        this.parties = [ ];
        this.selectedParty = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createParty();
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
                default:
                    selection = 0;
            }
        selection = this.showMainMenuOptions();
        }

    alert ('Goodbye!');
    }

    showMainMenuOptions() {
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
            
            let selection = this.showPartyMenuOptions(description)
            switch (selection) {
                case '1': 
                    this.createCharacter();
                    break;
                case '2':
                    this.deleteCharacter();
            }
        }
    }

    createCharacter() {
        let name = prompt('Enter name for new character:');
        let job = prompt('Enter job class for new player');
        this.selectedParty.characters.push(new haracter(name, job));
    }

    deleteCharacter() {
        let index = prompt('Enter the index of the character you wish to delete:');
        if (index > -1 && index < this.selectedParty.characters.length) {
            this.selectedParty.characters.splice(index, 1);
        }
    }
}



let menu = new Menu();
menu.start();
