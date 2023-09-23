import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  Modal,
  Image,
  StyleSheet,
} from "react-native";

function VerifyContributors({ navigation }) {
  const [selectedContributor, setSelectedContributor] = useState(null);
  const [contributorData, setContributorData] = useState([]);
  useEffect(() => {
    async function caller(){
      const response=await axios.get('http://localhost:5000/unacceptedContributors');
      console.log(response.data);
      setContributorData(response.data.contributors);
    }
    caller();
  }, [])

  // Function to handle opening the modal with images
  const openImageModal = (contributor) => {
    setSelectedContributor(contributor);
  };

  // Function to close the image modal
  const closeImageModal = () => {
    setSelectedContributor(null);
  };

  // Function to approve a contributor
  const approveContributor =async (id) => {
    // Implement logic to approve the contributor with the given ID
    // For example, update the verificationStatus to 'Approved'
    const response=await axios.put(`http://localhost:5000/acceptcontri/${id}`);
    console.log(response.data);
    if(response.data.success){
    const updatedData = contributorData.map((contributor) =>
      contributor.id === id
        ? { ...contributor, isApproved: "Approved" }
        : contributor
    );
    setContributorData(response.data.s);}
  };

  // Function to reject a contributor
  const rejectContributor = (contributorId) => {
    // Implement logic to reject the contributor with the given ID
    // For example, update the verificationStatus to 'Rejected'
    const updatedData = contributorData.map((contributor) =>
      contributor.id === contributorId
        ? { ...contributor, verificationStatus: "Rejected" }
        : contributor
    );
    setContributorData(updatedData);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contributors Awaiting Verification</Text>
      <FlatList
        data={contributorData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.contributorBlock}>
            <Text>Name: {item.name}</Text>
            <Text>Phone Number: {item.phoneNumber}</Text>
            <Text>Address: {item.address}</Text>
            <Text>Status: {item.isApproved?'Approved':'Pending/Rejected'}</Text>
            <View style={{ marginTop: 10, marginBottom: 10 }}>
              <Button
                title="View Images"
                onPress={() => openImageModal(item)}
              />
            </View>
            <View style={{ marginTop: 10, marginBottom: 10 }}>
              <Button
                title="Approve"
                onPress={() => approveContributor(item._id)}
                style={styles.approveButton}
              />
            </View>
            <View style={{ marginTop: 10, marginBottom: 10 }}>
              <Button
                title="Reject"
                onPress={() => rejectContributor(item.id)}
                style={styles.rejectButton}
              />
            </View>
          </View>
        )}
      />
      {/* Modal for viewing images */}
      <Modal
        visible={!!selectedContributor}
        animationType="slide"
        onRequestClose={closeImageModal}
      >
        <View style={styles.modalContainer}>
          <Button title="Close" onPress={closeImageModal} />
          {selectedContributor && (
            <View>
              <Text>Aadhar Card:</Text>
              <Image
               source={{ uri: selectedContributor.aadhar }}
                style={styles.image}
              />
              <Text>Pan Card:</Text>
              <Image
               source={{ uri: selectedContributor.pan }}
                style={styles.image}
              />
              <Text>License:</Text>
              <Image
               source={{ uri: selectedContributor.doc }}
                style={styles.image}
              />
            </View>
          )}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  contributorBlock: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20,
  },
  approveButton: {
    backgroundColor: "green",
    marginTop: 10,
  },
  rejectButton: {
    backgroundColor: "red",
    marginTop: 10,
  },
  modalContainer: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: 200,
    height: 100,
    resizeMode: "contain",
    marginBottom: 10,
  },
});

export default VerifyContributors;
