import React from 'react';
import Avatar from 'avataaars';

import avatarMapper from '../../utils/avatarMappers';

const ListItem = (person) => {
    const { name, hair_color, skin_color, birth_year, gender, films } = person.person;
    const { hairMapper, genderMapper } = avatarMapper;
    const hair = hairMapper(hair_color);
    console.log('HAIIIR', hair)
    const top = hair === 'NoHair' ? hair : genderMapper(gender);
    console.log('TOPPPP', top)
 
    return (
        <div>
            {name}
            <Avatar
                avatarStyle='Circle'
                topType={top}
                accessoriesType='Blank'
                hairColor={hair}
                eyeType='Default'
                eyebrowType='Default'
                skinColor='Light'
            />
        </div>
    )
}

export default ListItem;