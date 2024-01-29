import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Header from '../../component/Header/Header';
import i18n from '../../utils/i18n/i18n';
import RightArrow from '../../assets/svg/RightArrow';
import DismissKeyboard from '../../component/HOC/DismissKeyboard';
import AvoidKeyboard from '../../component/HOC/AvoidKeyboard';

const Cashout = ({
  navigation
}) => {

  const [amount, setAmount] = useState('');
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (amount > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [amount]);

  return (
    <AvoidKeyboard>
      <DismissKeyboard>
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
                placeholder='0'
                placeholderTextColor={'#808080'}
                value={amount}
                onChangeText={(text) => setAmount(text.replace(/^0*/, ''))}
              />
            </View>
          </View>

          <TouchableOpacity
            onPress={() => {
              disabled ? null : navigation.navigate('CashoutForm', { amount })
            }}
            style={[Styles.bottomButton, { backgroundColor: disabled ? '#808080' : '#4285F4', }]}>
            <RightArrow />
          </TouchableOpacity>

        </View>
      </DismissKeyboard>
    </AvoidKeyboard>
  );
};

export default Cashout;

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#FFFFFF',
    position: 'relative',
    // // borderWidth: 10
    // justifyContent: 'space-between',
  },

  topContainer: {
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: 1,
  },

  amountContainer: {
    paddingVertical: 30,
    margin: 8,
    borderColor: '#E0E0E0',
    borderWidth: 0.2,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',

    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
      },
      android: {
        elevation: 1,
      },
    }),
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
  },

  bottomButton: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    width: 48,
    height: 48,
    borderRadius: 24,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

});