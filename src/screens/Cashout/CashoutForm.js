import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../../component/Header/Header';
import i18n from '../../utils/i18n/i18n';
import DismissKeyboard from '../../component/HOC/DismissKeyboard';
import { MoneyReceiverOptions } from '../../utils/constants/Constants';
import RadioFilled from '../../assets/svg/RadioFilled';
import RadioEmpty from '../../assets/svg/RadioEmpty';
import FilledButton from '../../component/Buttons/FilledButton';
import LabelOverflowenInput from '../../component/TextInputs/LabelOverflowenInput';

const CashoutForm = ({
  navigation,
  route,
}) => {

  const amount = route.params?.amount || 0;
  const [selectedOption, setSelectedOption] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState({
    phoneNumber: '',
    name: '',
  });

  const checkIfSelected = (idx) => idx === selectedOption;
  const toggleSelectedOption = (idx) => setSelectedOption(idx);

  useEffect(() => {
    setShowForm(selectedOption === 1);
  }, [selectedOption]);

  const handleSubmit = () => {
    if (selectedOption === 0) {
      navigation.navigate('PaymentRequest', { success: true });
    } else {
      // Dummy validation
      if (phoneNumber.length < 11) {
        setErrorMessage({
          ...errorMessage,
          phoneNumber: 'মালিকের নাম্বার ব্যাতিত অন্য একটি নাম্বার দিন'
        })
        return;
      } else if (name.length < 3) {
        setErrorMessage({
          phoneNumber: '',
          name: 'মালিকের নাম ব্যাতিত অন্য একটি নাম দিন'
        })
      } else {
        setErrorMessage({
          phoneNumber: '',
          name: '',
        })
        navigation.navigate('PaymentRequest', { success: true });
      }
    }
  };


  const renderForm = () => {
    return (
      <View style={{ marginBottom: 20 }}>
        <LabelOverflowenInput
          label={i18n.i18n('Input_Label_Receiver_Number')}
          value={phoneNumber}
          setValue={setPhoneNumber}
          input={'numeric'}
          showErrorMessage={errorMessage.phoneNumber}
          errorMessage={errorMessage.phoneNumber}
          style={{ marginBottom: 20 }}
        />

        <LabelOverflowenInput
          label={i18n.i18n('Input_Label_Receiver_Name')}
          value={name}
          setValue={setName}
          showErrorMessage={errorMessage.name}
          errorMessage={errorMessage.name}
        />
      </View>
    )
  };

  const renderOptions = () => {
    return (
      <View style={{ marginVertical: 20, marginHorizontal: 10 }}>
        {
          MoneyReceiverOptions.map((item, index) => (
            <View key={index} style={{ marginBottom: index == 0 ? 10 : 0 }}>
              <TouchableOpacity
                onPress={() => toggleSelectedOption(item.idx)}
                style={Styles.options}
              >
                {checkIfSelected(item.idx) ? <RadioFilled /> : <RadioEmpty />}
                <Text style={{ color: '#000', fontSize: 16 }}>{i18n.i18n(item.option)}</Text>
              </TouchableOpacity>
            </View>
          ))
        }
      </View>
    )
  };

  return (
    <DismissKeyboard>
      <View style={Styles.container}>
        <View>
          <Header
            title={i18n.i18n('Title_Cashout')}
            onpressBack={() => navigation.goBack()}
          />

          <View style={Styles.topContainer}>
            <View>
              <Text style={{ color: '#808080' }}>{i18n.i18n('Text_Reciever')}</Text>
              <Text style={Styles.normalText}>01743620841</Text>
            </View>
            <Text style={[Styles.normalText, { fontSize: 16 }]}>৳ {amount}</Text>
          </View>

          <View style={Styles.formParent}>
            <Text style={Styles.optionTitle}>{i18n.i18n('Text_Reciever_Option_Title')}</Text>
            {renderOptions()}
            {showForm && renderForm()}

            <FilledButton
              title={i18n.i18n('Button_Title_Go')}
              onPress={handleSubmit}
            />
          </View>

        </View>
      </View>
    </DismissKeyboard>
  );
};

export default CashoutForm;

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#FFFFFF',
    // borderWidth: 10
    justifyContent: 'space-between',
  },

  topContainer: {
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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

  normalText: {
    color: '#000000',
    fontWeight: '500',
  },

  formParent: {
    marginTop: 10,
    padding: 24,
    backgroundColor: '#FFFFFF',
  },

  optionTitle: {
    fontSize: 16,
    color: '#000',
    fontWeight: '700'
  },

  options: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,

  }

});