import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState }  from "react";

export default function Index() {

  const [display, setDisplay] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);

  const handlePress = (value: string) => {
    if (value === '=') {
      try {
        setResult(eval(display));
      } catch (e) {
        setResult(NaN);
      }
    } else if (value === 'C') {
      setDisplay('');
      setResult(null);
    } else {
      setDisplay(display + value);
    }
  };

  return (

    <View style={styles.container}>
      <View style={styles.titleCard}>
        <Text style={styles.titleText}>Calculator</Text>
      </View>

      <View style={styles.displayContainer}>
        <Text style={styles.displayText} numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.5}>
          {result !== null ? result : display}
        </Text>
      </View>

      <View style={styles.row}>
        <CalcButton title="7" onPress={() => handlePress('7')} />
        <CalcButton title="8" onPress={() => handlePress('8')} />
        <CalcButton title="9" onPress={() => handlePress('9')} />
        <CalcButton title="x" onPress={() => handlePress('*')} />
      </View>

      <View style={styles.row}>
        <CalcButton title="4" onPress={() => handlePress('4')} />
        <CalcButton title="5" onPress={() => handlePress('5')} />
        <CalcButton title="6" onPress={() => handlePress('6')} />
        <CalcButton title="-" onPress={() => handlePress('-')} />
      </View>

      <View style={styles.row}>
        <CalcButton title="1" onPress={() => handlePress('1')} />
        <CalcButton title="2" onPress={() => handlePress('2')} />
        <CalcButton title="3" onPress={() => handlePress('3')} />
        <CalcButton title="+" onPress={() => handlePress('+')} />
      </View>

      <View style={styles.row}>
        <CalcButton title="C" onPress={() => handlePress('C')} />
        <CalcButton title="0" onPress={() => handlePress('0')} />
        <CalcButton title="=" onPress={() => handlePress('=')} />
        <CalcButton title="÷" onPress={() => handlePress('/')} />
      </View>

    </View>
  );
}

const CalcButton = ({ title, onPress }: { title: string; onPress: () => void }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}> {title} </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  titleCard: {
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#4caf50',
    borderRadius: 10,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff'
  },
  displayContainer: {
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    height: 80,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  displayText: {
    fontSize: 40,
    textAlign: 'right',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#e0e0e0',
    padding: 20,
    borderRadius: 25,
    minWidth: 80,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
  },
});