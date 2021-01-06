import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function RegisterScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCorrect={false}
          name='name'
          icon='account'
          placeholder='Name'
        ></AppFormField>
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          name='email'
          icon='email'
          placeholder='Email'
          keyboardType='email-address'
          textContentType='emailAddress'
        ></AppFormField>
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          name='password'
          icon='lock'
          placeholder='Password'
          secureTextEntry
          textContentType='password'
        ></AppFormField>
        <SubmitButton title='Register' />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
