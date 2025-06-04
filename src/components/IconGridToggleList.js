import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { EvilIcons } from '@expo/vector-icons'
import MyAppText from './MyAppText'
import Icon from './Icon'



const IconGridToggleList = ({ title, data }) => {
  const [showAll, setShowAll] = useState(false)
  const maxInitial = 7

  const shouldShowToggle = data.length > maxInitial

  const displayData = showAll ? [...data] : [...data.slice(0, maxInitial)]

  if (shouldShowToggle) {
    displayData.push({ title: '__TOGGLE__' }) // Use title for type consistency
  }

  return (
    <View style={{ marginHorizontal: 20, marginTop: 20 }}>
      <MyAppText style={styles.header}>{title}</MyAppText>

      <View style={styles.listContainer}>
        {displayData.map((item, index) => {
          const isToggle = item.title === '__TOGGLE__'

          if (isToggle) {
            return (
              <View key={'toggle'} style={styles.itemContainer}>
                <TouchableOpacity onPress={() => setShowAll(!showAll)}>
                  <View style={styles.toggleCircle}>
                    <EvilIcons
                      name={showAll ? 'chevron-up' : 'chevron-down'}
                      size={36}
                      color="#0099FF"
                      marginBottom={4}
                    />
                  </View>
                </TouchableOpacity>
                <MyAppText style={styles.label}>{showAll ? 'Less' : 'More'}</MyAppText>
              </View>
            )
          }

          return (
            <View key={index} style={styles.itemContainer}>
              <TouchableOpacity>
                <View style={styles.iconCircle}>
                  <Icon name={item.title.charAt(0).toUpperCase()} />
                </View>
              </TouchableOpacity>
              <MyAppText style={styles.label}>{item.title}</MyAppText>
            </View>
          )
        })}
      </View>
    </View>
  )
}

export default IconGridToggleList

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 25,
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 56,
  },
  iconCircle: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  toggleCircle: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    borderRadius: 28,
    backgroundColor: '#1C466A',
  },
  label: {
    textAlign: 'center',
    fontSize: 10,
    color: 'white',
  },
})
