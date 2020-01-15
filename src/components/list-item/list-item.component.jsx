import React from 'react';
import Avatar from 'avataaars';
import avatarMapper from '../../utils/avatarMappers';
import filmMapper from '../../utils/filmMapper';

const ListItem = (person) => {
    const { name, hair_color, skin_color, birth_year, gender, films } = person.person;
    const { hairMapper, genderMapper, skinMapper } = avatarMapper;
    const hair = hairMapper(hair_color);
    const skin = skinMapper(skin_color);
    const top = hair === 'NoHair' ? hair : genderMapper(gender);
 
    return (
        <div>
            <p>Name: {name}</p>
            <p>DOB: {birth_year}</p>
            <Avatar
                avatarStyle='Circle'
                topType={top}
                hairColor={hair}
                skinColor={skin}
            />
            <div>
                <ul>
                {films.map(film => {
                    return (
                        <li key='film'>{filmMapper(film)}</li>
                    )
                })}
                </ul>
            </div>
        </div>
    )
}

export default ListItem;