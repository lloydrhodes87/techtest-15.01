const avatarMapper = {
    hairMapper: (hairColor) => {
  
        const hairObject = {
            blond: 'Blonde',
            brown: 'Brown',
            'auburn, white': 'Auburn',
            'auburn, grey': 'Auburn',
            'auburn': 'Auburn',
            black: 'Black',
            none: 'NoHair',
            'n/a': 'NoHair',
            'brown grey': 'SilverGray',
            'white': 'SilverGray',
            'grey': 'SilverGray'
        
        }
    
        for (let key in hairObject) {
        
            if (key === hairColor) {
               
                return hairObject[key]
            } 
            
        }
        return 'Brown'
    },
    genderMapper: (gender) => {
        return gender === 'male' ? 'ShortHairShortFlat' : 'LongHairStraight';
    },
    skinMapper: (skin) => {
        const skinObject = {
            fair: 'Light',
            gold: 'Yellow',
            white: 'Pale',
            light: 'Light',
            'white, red': 'Pale',
            unknown: 'Light', 
            green: 'Yellow',
            'green-tan, brown': 'Yellow',
            pale: 'Pale',
            metal: 'Pale',
            dark: 'DarkBrown',
            'brown mottle': 'Brown',
            brown:'Brown',
            grey: 'Pale',
            'mottled green': 'Yellow',
            orange: 'Tanned',
            'blue, grey': 'Pale',
            'grey, red': 'Pale',
            black: 'Black',
            red: 'Tanned',
            blue: 'Pale',
            'white, blue': 'Pale',
            'grey, green, yellow': 'Yellow',
            'yellow': 'Yellow',
            'tan': 'Tanned',
            'fair, green, yellow': 'Yellow',
            'grey, blue': 'Pale',
            'silver, red': 'Pale',
            'green, grey': 'Yellow',
            'red, blue, white': 'Tanned',
            'brown, white': 'Brown',
            none: 'Pale'
        }

        for (let key in skinObject) {
        
            if (key === skin) {
               
                return skinObject[key]
            } 
            
        }
        return 'Pale'


    }

}



export default avatarMapper;