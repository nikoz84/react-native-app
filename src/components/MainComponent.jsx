import { SafeAreaView } from 'react-native-safe-area-context'
import { dishes } from '~/shared/dishes'


export default function MainComponent() {
    console.log(dishes)
    return (
        <SafeAreaView style={{flex: 1}}>
            <View>
                <Text>
                    {JSON.stringify(dishes, 2, null)}
                </Text>
            </View>
        </SafeAreaView>
    )
}