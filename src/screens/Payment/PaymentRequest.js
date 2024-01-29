import React, { useState } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import Header from '../../component/Header/Header';
import i18n from '../../utils/i18n/i18n';
import PaymentNumberInput from '../../component/TextInputs/PaymentNumberInput';
import MoneyRequestCard from '../../component/Cards/MoneyRequestCard';
import BottomSuccessModal from '../../component/Modals/BottomSuccessModal';

const PaymentRequest = ({ navigation, route }) => {
  const [showModal, setShowModal] = useState(route.params?.success || false);
  const [value, setValue] = useState('01743620841');

  return (
    <View style={Styles.container}>
      <BottomSuccessModal
        visibility={showModal}
        setVisibility={setShowModal}
      />
      <Header
        title={i18n.i18n('Title_Payment')}
        onpressBack={() => navigation.goBack()}
      />
      <View style={Styles.topContainer}>
        <PaymentNumberInput
          value={value}
          setValue={setValue}
        />
      </View>

      <View style={{ paddingHorizontal: 12 }}>
        <Text style={Styles.reqText}>{i18n.i18n("Text_Request")}</Text>

        {[1, 2, 3].map((item, index) => (
          <MoneyRequestCard key={index} />
        ))}
      </View>
    </View>
  );
};

export default PaymentRequest;

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  topContainer: {
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: 1,
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

  reqText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
    marginVertical: 20,
    color: '#000000'
  }

});