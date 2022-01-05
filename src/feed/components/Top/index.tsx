import React from 'react';
import {Text, View, Image} from 'react-native';

import styles from './style';

export type Props = {
  title: string;
};

const Top: React.FC<Props> = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.brand}>{title}</Text>

      <Image
        style={styles.notifications}
        source={require('assets/img/icon-social-notifications.png')}
      />
    </View>
  );
};

export default Top;