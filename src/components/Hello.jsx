import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { bool, shape, string } from 'prop-types';

function Hello(props) {
  // Hello() の呼び出し先で、この関数の間に定義されたものは、props.children　に入ってくる
  const { children, bang, style } = props; // 分割代入
  return (
    <View>
      {/* props から受け取ったstyle が存在していれば、style.text を上書き可能 */}
      {/* また、[styles.text, style, foo, bar] となる場合は、一番右のbarのcss styleが優先反映*/}
      <Text style={[styles.text, style]}>
        {`Hello ${children}${bang ? '!' : ''}`}
      </Text>
    </View>
  );
}

// props の型定義
Hello.propTypes = { 
  children: string.isRequired, // isRequired 引数渡しが必須定義
  bang: bool,
  style: shape(), // この型定義は、Object が入ってくることを示す
}

// Hello.propTypes で必須項目ではない、任意の引数にしたい場合は
// 以下で、default値を定義する必要がある
Hello.defaultProps = {
  bang: false,
  style: null,
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    backgroundColor: 'blue',
    fontSize: 40, //react-native だと単位は不要
    padding: 16,
  },
});

export default Hello;
