import { View } from 'react-native';
import BottomSheetHomeComponent from '../../components/HomeScreen/BottomSheetHomeComponent';
import PopularBanks from '../../components/HomeScreen/PopularBanks';
import AllBanks from '../../components/HomeScreen/AllBanks';

const BottomSheetHomeScreen = ({ searchQuery, setSearchQuery, sheetRef, navigation }) => (
  <View style={{ flex: 1, backgroundColor: '#02111A' }}>
    <BottomSheetHomeComponent searchQuery={searchQuery} setSearchQuery={setSearchQuery} sheetRef={sheetRef} />
    <PopularBanks searchQuery={searchQuery.length >= 3 ? searchQuery : ''} navigation={navigation} />
    <AllBanks searchQuery={searchQuery.length >= 3 ? searchQuery : ''} navigation={navigation} />
  </View>
);

export default BottomSheetHomeScreen;