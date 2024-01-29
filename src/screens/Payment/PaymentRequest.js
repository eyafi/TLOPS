import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Platform, FlatList, ActivityIndicator } from 'react-native';
import Header from '../../component/Header/Header';
import i18n from '../../utils/i18n/i18n';
import PaymentNumberInput from '../../component/TextInputs/PaymentNumberInput';
import MoneyRequestCard from '../../component/Cards/MoneyRequestCard';
import BottomSuccessModal from '../../component/Modals/BottomSuccessModal';
import RequestData from '../../utils/DummyData/paymentRequest.json';

const PaymentRequest = ({ navigation, route }) => {
  const [showModal, setShowModal] = useState(route.params?.success || false);
  const [value, setValue] = useState('01743620841');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);

  useEffect(() => {
    setLoading(true);
    let loadingDataTimeout;
    const fetchData = () => {
      setData(RequestData.slice(0, initialIndex + 10));
      setLoading(false);
    };
    loadingDataTimeout = setTimeout(fetchData, 500);
    return () => {
      clearTimeout(loadingDataTimeout);
    };
  }, [initialIndex]);


  const renderMoneyRequestCards = ({ item, index }) => {
    return (
      <MoneyRequestCard
        amount={item.amount}
        phone={item.phone}
        date={item.date}
        style={{ marginHorizontal: 12 }}
      />
    );
  }

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

      <Text style={Styles.reqText}>{i18n.i18n("Text_Request")}</Text>

      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderMoneyRequestCards}
        // showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.1}
        onEndReached={() => {
          console.log('end reached');
          setInitialIndex(initialIndex + 10)
        }}
        style={{ flex: 1, }}
      />

      {loading && <ActivityIndicator size="small" color="#4285F4" />}
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