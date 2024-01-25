import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Header from '../../component/Header/Header';
import i18n from '../../utils/i18n/i18n';

const Cashout = ({
  navigation
}) => {

  const [amount, setAmount] = useState('0');
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (amount > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [amount]);

  return (
    <View style={Styles.container}>
      <Header
        title={i18n.i18n('Title_Cashout')}
        onpressBack={() => navigation.goBack()}
      />

      <View style={Styles.topContainer}>
        <Text style={{ color: '#808080' }}>{i18n.i18n('Text_Reciever')}</Text>
        <Text style={{ color: '#000000', fontWeight: '500' }}>01743620841</Text>
      </View>

      <View style={Styles.amountContainer}>
        <Text style={{ color: '#808080' }}>{i18n.i18n('Text_Amount')}</Text>
        <View style={Styles.amount}>
          <Text style={{ color: disabled ? '#808080' : '#000000', fontWeight: '700', fontSize: 22.5 }}>৳</Text>
          <TextInput
            style={[{ color: disabled ? '#808080' : '#4285F4', }, Styles.amountText]}
            inputMode='numeric'
            value={amount}
            onChangeText={(text) => {
              setAmount(text.replace(/^0*/, '') || '0');
            }}
          />
        </View>
      </View>

    </View>
  );
};

export default Cashout;

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },

  topContainer: {
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: 1,
  },

  amountContainer: {
    paddingVertical: 30,
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },

  amount: {
    flexDirection: 'row',
  },
  amountText: {
    fontWeight: '700',
    fontSize: 46.5,
    marginLeft: 5,
    padding: 0,
    height: 50,
  }


});