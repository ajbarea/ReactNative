// The rest of this introduction to React uses cats in its examples: friendly, approachable creatures 
// that need names and a cafe to work in. Here is your very first Cat component:
import React from 'react';
import { Text } from 'react-native';

const Cat = () => {
    return <Text>Hello, I am your cat!</Text>;
};

export default Cat;

// JSX
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

// Props
// Props is short for “properties”. Props let you customize React components.
// You can think of props as arguments you use to configure how components render.
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

// Most of React Native’s Core Components can be customized with props, too. 
// For example, when using Image, you pass it a prop named source to define what image it shows.
// Image has many different props, including style, which accepts a JS object of design and 
// layout related property-value pairs. In JSX, JavaScript values are referenced with {}
import React from 'react';
import { Text, View, Image } from 'react-native';

const CatApp = () => {
    return (
        <View>
            <Image
                source={{
                    uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
                }}
                style={{ width: 200, height: 200 }}
            />
            <Text>Hello, I am your cat!</Text>
        </View>
    );
};

export default CatApp;

//State
// State is like a component’s personal data storage. State is useful for handling data
// that changes over time or that comes from user interaction. State gives your components memory
// **As a general rule**
//    - Use props to configure a component when it renders.
//    - Use state to keep track of any component data that you expect to change over time.

// You can add state to a component by calling React’s useState Hook. A Hook is a kind of function 
// that lets you “hook into” React features. 
// For example, useState is a Hook that lets you add state to function components.
// You can use useState to track any kind of data: strings, numbers, Booleans, arrays, objects. 
// For example, you can track the number of times a cat has been petted with: 
//     const [timesPetted, setTimesPetted] = useState(0)

// Calling useState does two things:
//    1. creates a state variable with an initial value
//          state variable: 'isHungry'
//          initial value: 'true'
//    2. creates a function to set that state variable’s value
//          function: 'setIsHungry'
import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

type CatProps = {
    name: string;
};

const Cat = (props: CatProps) => {
    //    [<getter>, <setter>] = useState(<initialValue>).
    const [isHungry, setIsHungry] = useState(true);

    return (
        <View>
            <Text>
                I am {props.name}, and I am {isHungry ? 'hungry' : 'full'}!
            </Text>
            <Button
                onPress={() => {
                    setIsHungry(false);
                }}
                disabled={!isHungry}
                title={isHungry ? 'Give me some food, please!' : 'Thank you!'}
            />
        </View>
    );
};

const Cafe = () => {
    return (
        <>
            <Cat name="Munkustrap" />
            <Cat name="Spot" />
        </>
    );
};

export default Cafe;
// See the <> and </> above? These bits of JSX are fragments.
// Adjacent JSX elements must be wrapped in an enclosing tag.
// Fragments let you do that without nesting an extra, unnecessary wrapping element like View.