// The rest of this introduction to React uses cats in its examples: friendly, approachable creatures 
// that need names and a cafe to work in. Here is your very first Cat component:
import React from 'react';
import { Text } from 'react-native';

const Cat = () => {
    return <Text>Hello, I am your cat!</Text>;
};

export default Cat;

// Because JSX is JavaScript, you can use variables inside it. Here we declare a name for the cat, 
// name it, and embedding it with curly braces inside <Text>
import React from 'react';
import { Text } from 'react-native';

const Cat = () => {
    const name = 'Maru';
    return <Text>Hello, I am {name}!</Text>;
};

export default Cat;

// Any JavaScript expression will work between curly braces, including function 
// calls like {getFullName("Rum", "Tum", "Tugger")}:
import React from 'react';
import { Text } from 'react-native';

const getFullName = (
    firstName: string,
    secondName: string,
    thirdName: string,
) => {
    return firstName + ' ' + secondName + ' ' + thirdName;
};

const Cat = () => {
    return <Text>Hello, I am {getFullName('Rum', 'Tum', 'Tugger')}!</Text>;
};

export default Cat;

// Custom Components
// React lets you nest these components inside each other to create new components. 
// These nestable, reusable components are at the heart of the React paradigm.
// For example, you can nest Text and TextInput inside a View below, 
// and React Native will render them together:
import React from 'react';
import { Text, TextInput, View } from 'react-native';

const Cat = () => {
    return (
        <View>
            <Text>Hello, I am...</Text>
            <TextInput
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                }}
                defaultValue="Name me!"
            />
        </View>
    );
};

export default Cat;

//You can render this component multiple times and in multiple places without repeating your code 
// by using <Cat>: Any component that renders other components is a parent component. 
// Here, Cafe is the parent component and each Cat is a child component.
// You can put as many cats in your cafe as you like. 
// Each <Cat> renders a unique element—which you can customize with props.
import React from 'react';
import { Text, View } from 'react-native';

const Cat = () => {
    return (
        <View>
            <Text>I am also a cat!</Text>
        </View>
    );
};

const Cafe = () => {
    return (
        <View>
            <Text>Welcome!</Text>
            <Cat />
            <Cat />
            <Cat />
        </View>
    );
};

export default Cafe;

// Props is short for “properties”. Props let you customize React components. 
// For example, here you pass each <Cat> a different name for Cat to render:
import React from 'react';
import { Text, View } from 'react-native';

type CatProps = {
    name: string;
};

const Cat = (props: CatProps) => {
    return (
        <View>
            <Text>Hello, I am {props.name}!</Text>
        </View>
    );
};

const Cafe = () => {
    return (
        <View>
            <Cat name="Maru" />
            <Cat name="Jellylorum" />
            <Cat name="Spot" />
        </View>
    );
};

export default Cafe;