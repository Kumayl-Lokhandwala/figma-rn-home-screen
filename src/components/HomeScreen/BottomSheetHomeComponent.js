import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import MyAppText from '../MyAppText';
import SearchIcon from '../../../assets/svg/icons/SearchIcon';

const BottomSheetHomeComponent = ({ searchQuery, setSearchQuery, sheetRef }) => {

  const handleClose = () => {
    sheetRef.current?.dismiss();
  };

  const handleBlur = () => {
    sheetRef.current?.snapToIndex(0);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchWrapper}>
        <SearchIcon style={styles.searchIcon} />
        <BottomSheetTextInput
          style={styles.textInput}
          placeholder="Search by bank name"
          placeholderTextColor="white"
          value={searchQuery}
          onChangeText={setSearchQuery}
          onBlur={handleBlur}
          returnKeyType="done"
          
        />
      </View>
    </View>
  );
};

export default BottomSheetHomeComponent;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#02111A',
    paddingTop: 20,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#02111A',
    borderColor: '#0099FF',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    width: '95%',
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 8,
  },
  textInput: {
    flex: 1,
    color: '#FFFFFF',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    paddingVertical: 10,
  },
});
