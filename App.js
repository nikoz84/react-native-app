import { StyleSheet, View, SafeAreaView} from 'react-native';
import { Text, Button, Card } from 'react-native-elements';


export default function App() {
  function onClickEvent(e){
    console.log('oi')
  }
  return (
    <SafeAreaView>
      <View>

        <Text
          h1
          h1Style={styles.h1}
        >
          Your Heading
        </Text>
        <Card>
        <Text>Word of the Day</Text>
        <Text h4>be-nev-o=lent</Text>
        <Text>adjective</Text>
        <Text>
          well meaning and kindly.
          {'"a benevolent smile"'}
        </Text>
        <Button size="sm" type="clear">
          Learn More
        </Button>
        </Card>
        <Button
          containerStyle={{ height: 60, marginTop: 50 }}
          buttonStyle={{ height: '100%' }}
          icon={{ name: "mail", size: 18, type: 'entypo', color: "black" }}
          iconRight
          title='button title'
          onPress={onClickEvent}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a2825',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff'
  },
  h1: {
    backgroundColor: '#00f',
    padding: 10,
    color: '#df0'
  },
});
