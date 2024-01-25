import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../../component/Header/Header';
import i18n from '../../utils/i18n/i18n';
import PaymentNumberInput from '../../component/TextInputs/PaymentNumberInput';
import QRIcon from '../../assets/svg/QRIcon';
import TransparentButton from '../../component/Buttons/TransparentButton';

const Payment = ({ navigation }) => {
  const [value, setValue] = useState('');

  const navigateToCashOut = () => {
    navigation.navigate('Cashout');
  }

  return (
    <View style={Styles.container}>
      <Header
        title={i18n.i18n('Title_Payment')}
        onpressBack={() => navigation.goBack()}
      />
      <PaymentNumberInput
        value={value}
        setValue={setValue}
      />

      <View style={Styles.qrButtonParent}>
        <TouchableOpacity style={Styles.qrButton}>
          <QRIcon />
          <Text style={{ color: '#E67E22', fontSize: 14 }}>{i18n.i18n("Button_QR_Scan")}</Text>
        </TouchableOpacity>
      </View>

      <View style={Styles.cashoutButtonParent}>
        <Text style={Styles.noReqMsg}>{i18n.i18n("Message_No_Request")}</Text>
        <TransparentButton
          title={i18n.i18n("Button_Cashout")}
          onPress={navigateToCashOut}
        />
      </View>

    </View>
  );
};

export default Payment;

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },
  qrButtonParent: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: '#ECEEF0',
    borderBottomColor: '#ECEEF0',
    paddingVertical: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },

  qrButton: {
    borderWidth: 1,
    borderColor: '#E67E22',
    borderRadius: 36,
    paddingHorizontal: 15,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },
  cashoutButtonParent: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',

  },
  noReqMsg: {
    fontSize: 16,
    fontWeight: '700',
    marginVertical: 10,
    color: '#000000'
  }

});