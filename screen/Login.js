import React from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const Login = ({ navigation }) => {
  const handleForgotPasswordPress = () => {
    // Điều hướng đến màn hình fPassword
    navigation.navigate('fPassword');
  };
  
  const handleCreateAccountPress = () => {
    // Điều hướng đến màn hình Signup
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./../assets/Vector.png')}
        style={styles.image}
      />
      <Text style={styles.title}>FOODU</Text>

      <TextInput
        placeholder="Nhập SDT đăng kí"
        style={styles.input}
      />
      <TextInput
        placeholder="Mật khẩu"
        secureTextEntry={true}
        style={styles.input}
      />

      <TouchableOpacity onPress={handleForgotPasswordPress}>
        <Text style={styles.forgotPassword}>forgot a password?</Text>
      </TouchableOpacity>

      {/* Thêm dòng chữ "Create Account" và xử lý sự kiện */}
      <TouchableOpacity onPress={handleCreateAccountPress}>
        <Text style={styles.createAccount}>Create Account</Text>
      </TouchableOpacity>

      {/* Đặt nút Login ở dưới cùng và chiếm 90% độ rộng */}
      <View style={styles.loginButtonContainer}>
        <Button
          title="Login"
          onPress={() => {
            // Xử lý đăng nhập ở đây
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  image: {
    width: 130,
    height: 120,
    resizeMode: 'contain',
  },
  input: {
    width: '100%',
    height: 60,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginTop: 16,
    paddingLeft: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  forgotPasswordContainer: {
    width: '100%',
    alignItems: 'flex-end',
    marginTop: 10,
  },
  forgotPassword: {
    color: 'pink',
    fontSize: 18,
    textAlign: 'right', // Căn lề phải
  },
  createAccount: {
    color: 'blue', // Màu của dòng chữ "Create Account"
    fontSize: 18,
    marginTop: 10, // Đặt khoảng cách từ trên xuống
    textAlign: 'center', // Căn giữa ngang
  },
  loginButtonContainer: {
    width: '90%',
    marginTop: 20, // Đặt khoảng cách từ trên xuống
  },
});

export default Login;
