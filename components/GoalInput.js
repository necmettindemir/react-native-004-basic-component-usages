import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  }

  return (
    <Modal visible={props.visible} animationType="slide">

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}/>
 

        <View style={ styles.buttonContainer }>

            <View style={ styles.button }>
                <Button                 
                    title="CANCEL" 
                    color="red"
                    onPress={ () => { props.onCancelGoal(); } } />
            </View>      
            
            <View style={ styles.button }>
                <Button title="ADD" 
                        onPress={ () => { addGoalHandler(); } } />            
            </View>

        </View>
                
      </View>
    </Modal>
  );
};



const styles = StyleSheet.create({
  inputContainer: {
    flex:1,
    flexDirection: 'column',    
    marginLeft:20,
    marginTop:40,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    marginRight: 5
  },
  buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between'
  },
  button: {
      width: '30%',    
      justifyContent: 'center',
      alignItems: 'stretch',
      marginStart: 5,      
      marginEnd: 5    
  }
});

export default GoalInput;