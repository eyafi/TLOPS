import React from 'react';
import { View, StyleSheet, Text, Modal, TouchableWithoutFeedback, Image } from 'react-native';
import Success from '../../assets/png/successimg.png';
import i18n from '../../utils/i18n/i18n';
import FilledButton from '../Buttons/FilledButton';

const BottomSuccessModal = ({
  visibility,
  setVisibility,
}) => {

  const closeModal = () => {
    setVisibility(false)
  }

  return (
    <Modal
      visible={visibility}
      animationType={'slide'}
      transparent={true}
      onRequestClose={closeModal}
    >

      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={[styles.modal]} >
          <View style={[styles.modalContent]}>
            <Image source={Success} />
            <Text style={styles.title}>{i18n.i18n('Text_Success')}</Text>
            <Text style={styles.text}>একাউন্ট ০১৮২৯১৯৩৬৩৭ থেকে ৫০০ টাকা উত্তোলন রিকুয়েস্ট সফল হয়েছে</Text>

            <FilledButton
              title={i18n.i18n('Button_Title_OK')}
              style={{ marginTop: 20, width: '100%' }}
              onPress={closeModal}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )

}

const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    justifyContent: 'flex-end',
    flex: 1,
    backgroundColor: '#010714B8',
  },
  modalContent: {
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
    padding: 24,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    position: 'relative',
    alignItems: 'center'
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000'
  },

  text: {
    textAlign: 'center',
    color: '#000',
    fontSize: 16,
    marginTop: 20,
    // borderWidth: 1,
  }

})

export default BottomSuccessModal
