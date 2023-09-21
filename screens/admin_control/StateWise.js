import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet ,Alert} from 'react-native';

const stateAndUTData = [
  { id: '1', name: 'Andaman and Nicobar Islands' },
  { id: '2', name: 'Andhra Pradesh' },
  { id: '3', name: 'Arunachal Pradesh' },
  { id: '4', name: 'Assam' },
  { id: '5', name: 'Bihar' },
  { id: '6', name: 'Chandigarh' },
  { id: '7', name: 'Chhattisgarh' },
  { id: '8', name: 'Dadra and Nagar Haveli and Daman and Diu' },
  { id: '9', name: 'Delhi' },
  { id: '10', name: 'Goa' },
  { id: '11', name: 'Gujarat' },
  { id: '12', name: 'Haryana' },
  { id: '13', name: 'Himachal Pradesh' },
  { id: '14', name: 'Jammu and Kashmir' },
  { id: '15', name: 'Jharkhand' },
  { id: '16', name: 'Karnataka' },
  { id: '17', name: 'Kerala' },
  { id: '18', name: 'Ladakh' },
  { id: '19', name: 'Lakshadweep' },
  { id: '20', name: 'Madhya Pradesh' },
  { id: '21', name: 'Maharashtra' },
  { id: '22', name: 'Manipur' },
  { id: '23', name: 'Meghalaya' },
  { id: '24', name: 'Mizoram' },
  { id: '25', name: 'Nagaland' },
  { id: '26', name: 'Odisha' },
  { id: '27', name: 'Puducherry' },
  { id: '28', name: 'Punjab' },
  { id: '29', name: 'Rajasthan' },
  { id: '30', name: 'Sikkim' },
  { id: '31', name: 'Tamil Nadu' },
  { id: '32', name: 'Telangana' },
  { id: '33', name: 'Tripura' },
  { id: '34', name: 'Uttar Pradesh' },
  { id: '35', name: 'Uttarakhand' },
];

function StateWise({ navigation }) {
  const handleStateClick = (stateName) => {
    // Handle the click action for the state here
    // For now, we'll just display an alert with the selected state
    Alert.alert(`You clicked on ${stateName}`);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={stateAndUTData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.stateItem}
            onPress={() => navigation.navigate("ComplaintPosts",{name:item.name})}
          >
            <Text style={styles.stateName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  stateItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  stateName: {
    fontSize: 16,
  },
});

export default StateWise;
