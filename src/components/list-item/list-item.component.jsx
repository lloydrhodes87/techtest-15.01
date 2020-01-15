import React from 'react';

const ListItem = (person) => {
    const { name, hair_color, skin_color, eye_color, birth_year, gender, films } = person.person
    return (
        <div>
            {name}
        </div>
    )
}

export default ListItem;