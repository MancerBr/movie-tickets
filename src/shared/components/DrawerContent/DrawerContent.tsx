import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {Avatar} from '../Avatar';
import {DrawerItem} from './DrawerItem';
import Icon from '../Icon';
const MENU_ITEMS: any[] = [
  {
    icon: 'profile',
    text: 'Account',
    route: '',
  },
  {
    icon: 'refound',
    text: 'Ticket refund',
    route: '',
  },
  {
    icon: 'settings',
    text: 'Settings',
    route: '',
  },
  {
    icon: 'info',
    text: 'About',
    route: '',
  },
];

export const DrawerContent: React.FC<any> = () => {
  return (
    <SafeAreaView style={{flex: 1, flexDirection: 'column'}}>
      <View style={{backgroundColor: '#184E6B', padding: 10}}>
        <View style={{marginBottom: 30}}>
          <Avatar uri={''} text={'R'} />
        </View>
        <View>
          <View>
            <Text>firstName LastName</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text>email.example.com</Text>
          </View>
        </View>
      </View>
      <ScrollView
        style={{flex: 1, backgroundColor: '#EBF7FF'}}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        {MENU_ITEMS.map((item, index) => (
          <DrawerItem key={index} text={item.text} icon={item.icon} />
        ))}
      </ScrollView>
      <View
        style={{
          alignItems: 'center',
          backgroundColor: '#EBF7FF',
          paddingBottom: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#B5E3FF',
            borderRadius: 25,
            width: 210,
            padding: 15,
          }}>
          <Icon
            name="logout"
            size={15}
            style={{color: '#000', marginRight: 10}}
          />
          <Text style={{color: '#000'}}>Logout</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
