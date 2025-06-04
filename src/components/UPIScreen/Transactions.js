import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import MyAppText from '../MyAppText'
import Icon from '../Icon'
import transactionData from '../../../data/transactionData'

const Transactions = () => {
  const displayData = transactionData.slice(0, 2)

  return (
    <View>
      {/* Heading */}
      <View style={styles.headingContainer}>
        <MyAppText style={styles.text}>Recent Transactions</MyAppText>
        <TouchableOpacity>
          <MyAppText style={{ fontSize: 12, color: '#0099FF' }}>View All {'>'}</MyAppText>
        </TouchableOpacity>
      </View>

      {/* Transaction Card */}
      <View style={styles.transactionContainer}>
        {/* Header */}
        <View style={styles.containerHeader}>
          <MyAppText style={{ fontSize: 10, fontWeight: 'bold', color: '#ccc' }}>2024</MyAppText>
          <View style={styles.containerHeader2}>
            <MyAppText style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>December</MyAppText>
            <MyAppText style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>₹28,000</MyAppText>
          </View>
        </View>

        {/* Transaction Items */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10 }}
        >
          {displayData.map((tx, index) => (
            <View key={index}>
              <View style={styles.transactionItem}>
                <View style={styles.iconWrapper}>
                  <Icon name={tx.title} />
                </View>
                <View style={styles.infoWrapper}>
                  <View style={styles.infoRow}>
                    <MyAppText style={styles.txId}>{tx.id}</MyAppText>
                    <MyAppText style={styles.amount}>₹{tx.amount}</MyAppText>
                  </View>
                  <MyAppText style={styles.date}>{tx.date}</MyAppText>
                </View>
              </View>

              {/* Divider between items */}
              {index !== displayData.length - 1 && (
                <View style={styles.divider} />
              )}
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  )
}

export default Transactions

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headingContainer: {
    display: 'flex',
    marginTop: 15,
    marginVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  transactionContainer: {
    backgroundColor: '#0B2A3E',
    height: 245,
    borderRadius: 7,
    padding: 10,
    marginHorizontal: 10,
  },
  containerHeader: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 34,
  },
  containerHeader2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    paddingTop: 10,
    marginBottom: 10,
  },
  iconWrapper: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#1C466A',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  infoWrapper: {
    flex: 1,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txId: {
    fontSize: 14,
    color: 'white',
  },
  amount: {
    fontSize: 14,
    color: 'white',
  },
  date: {
    fontSize: 10,
    color: 'white',
    marginTop: 2,
  },
  divider: {
    height: 1,
    backgroundColor: '#1C466A',
    marginLeft: 66, // aligns with text start (56 icon + 10 margin)
    marginVertical: 5,
  },
})
