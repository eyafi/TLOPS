import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ThreeDot from '../../assets/svg/ThreeDot';

const MoneyRequestCard = ({ style }) => {
  return (
    <View style={[Styles.parent, style]}>
      <View>
        <Text style={Styles.amount}>৳ ৫০০</Text>
        <Text style={Styles.phone}>01743620841</Text>
        <Text style={Styles.date}>31 Oct - 08:00 PM </Text>
      </View>

      <View style={{ justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <ThreeDot />
        <TouchableOpacity style={Styles.button}>
          <Text style={Styles.buttonText}>
            SEND TOKEN
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MoneyRequestCard;

const Styles = StyleSheet.create({
  parent: {
    elevation: 2,
    borderRadius: 8,
    padding: 19,
    backgroundColor: '#fff',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  amount: { fontSize: 20, fontWeight: '700', color: '#FF3F34' },
  phone: { marginTop: 10, fontSize: 12, color: 'rgba(0, 0, 0, 0.64)' },
  date: { marginTop: 2, color: '#ABABAB' },
  button: { borderWidth: 1, borderColor: '#ABABAB', padding: 5, borderRadius: 4 },
  buttonText: { fontSize: 12, fontWeight: '500', color: '#000' },

});