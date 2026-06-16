import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const StatusWidget = () => {

  const [value, setValue] = useState('matin');

  const data = [
    { label: 'Matin', value: 'matin' },
    { label: 'Après-midi', value: 'apres-midi' },
    { label: 'Soir', value: 'soir' },
  ];

  const statusDots = ['#0C1A47', '#FF4D4D', '#0C1A47', '#EAEAEA', '#EAEAEA'];

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View style={styles.dateContainer}>
          <Text style={styles.dayNumber}>14</Text>
          <View style={styles.monthYearContainer}>
            <Text style={styles.dayName}>Mercredi</Text>
            <Text style={styles.monthYear}>Janvier 2026</Text>
          </View>
        </View>

        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          containerStyle={styles.dropdownContainer}
          iconStyle={styles.iconStyle}
          data={data}
          maxHeight={200}
          labelField="label"
          valueField="value"
          value={value}
          onChange={item => {
            setValue(item.value);
          }}
        />
      </View>

      <View style={styles.bottomSection}>
        <Text style={styles.sectionTitle}>Statuts de cette semaine</Text>
        <View style={styles.dotsRow}>
          {statusDots.map((color, index) => (
            <View key={index} style={[styles.dot, { backgroundColor: color }]} />
          ))}
        </View>
      </View>
    </View>
  );
};

export default StatusWidget;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
    borderRadius: 16,
    padding: 20,
    margin: 16,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dayNumber: {
    fontSize: 48,
    fontWeight: '300',
    color: '#000',
    marginRight: 12,
  },
  monthYearContainer: {
    justifyContent: 'center',
  },
  dayName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  monthYear: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },

  dropdown: {
    width: 100, 
    height: 30,
  },
  dropdownContainer: {
    borderRadius: 8, 
    backgroundColor: '#fff',
  },
  selectedTextStyle: {
    fontSize: 14,
    color: '#8A8A8F',
    fontWeight: '500',
    textAlign: 'right', 
  },
  placeholderStyle: {
    fontSize: 14,
    color: '#8A8A8F',
  },
  iconStyle: {
    width: 18,
    height: 18,
    tintColor: '#8A8A8F', 
  },
  bottomSection: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 13,
    color: '#8A8A8F',
    marginBottom: 12,
  },
  dotsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 28,
    height: 28,
    borderRadius: 14,
    marginRight: 12,
  },
});
