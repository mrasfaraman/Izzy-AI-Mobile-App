import React from 'react';
import {Actionsheet, Box} from 'native-base';
import {View, StyleSheet, Text} from 'react-native';
import CustomButton from './Button';

function ReportDetails({
  closeDetails,
  detailsOpen,
  navigation,
  reportData,
  itemNum,
}: any) {
  if (!reportData) {
    return null; // If reportData is null or undefined, return null to render nothing
  }
  const data = reportData.AssessmentResults[itemNum];
  console.log(data);

  console.log('Data', reportData);
  return (
    <Actionsheet isOpen={detailsOpen} onClose={() => closeDetails(false)}>
      <Actionsheet.Content style={{}}>
        <Box w="100%" h={550} px={4}>
          <Text
            style={[
              styles.base,
              {textAlign: 'center', fontSize: 16, fontWeight: '500'},
            ]}>
            {data.DisorderName}
          </Text>

          <View style={{marginTop: 40}}>
            <View style={{marginVertical: 5}}>
              <Text style={[styles.base, {fontSize: 16}]}>Name:</Text>
              <Text style={[styles.base, {fontSize: 16}]}>
                {reportData.ProfileDetail.Name}
              </Text>
            </View>

            <View style={{marginVertical: 5}}>
              <Text style={[styles.base, {fontSize: 16}]}>Age:</Text>
              <Text style={[styles.base, {fontSize: 16}]}>
                {reportData.ProfileDetail.Age}
              </Text>
            </View>

            <View style={{marginVertical: 5}}>
              <Text style={[styles.base, {fontSize: 16}]}>Date:</Text>
              <Text style={[styles.base, {fontSize: 16}]}>
                {new Date(data.AssessmentDate).toLocaleDateString('en-GB')}
              </Text>
            </View>

            <View style={{marginVertical: 5}}>
              <Text style={[styles.base, {fontSize: 16}]}>
                Number of Sessions:
              </Text>
              <Text style={[styles.base, {fontSize: 16}]}>
                {reportData.ProfileDetail['Total Sessions']}
              </Text>
            </View>

            <View style={{marginVertical: 5}}>
              <Text style={[styles.base, {fontSize: 16}]}>
                {data.DisorderName === 'Articulation'
                  ? 'Normal'
                  : data.DisorderName}
              </Text>
              <Text style={[styles.base, {fontSize: 16}]}>{data.Score}%</Text>
            </View>
          </View>

          <View
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 'auto',
            }}>
            <CustomButton title="Reset Record" />
          </View>
        </Box>
      </Actionsheet.Content>
    </Actionsheet>
  );
}

export default ReportDetails;

const styles = StyleSheet.create({
  base: {
    fontFamily: 'SF-Pro-Display-Regular',
    color: '#111920',
  },
});
