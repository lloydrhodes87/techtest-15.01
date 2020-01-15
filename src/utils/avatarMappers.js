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
        console.log(gender)
        return gender === 'male' ? 'ShortHairShortFlat' : 'LongHairStraight';
    }

}



export default avatarMapper;