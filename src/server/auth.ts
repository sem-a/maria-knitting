import { userAuth } from "../store/features/user/userSlice";

const bcrypt = require('bcryptjs');

export const registration = async(e: any) => {
  e.preventDefault();
  try {
    const password = e.target.passwordReg.value;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = {
      name: e.target.surname.value + " " + e.target.name.value + " " + e.target.middleName.value,
      address: e.target.address.value,
      email: e.target.emailReg.value,
      password: hash,
      phone: e.target.phone.value
    };
    const emailExistDate = await fetch(`http://localhost:3001/user?email=${user.email}`);
    let emailExist = await emailExistDate.json();
    emailExist = emailExist.values[0]?.email;
    console.log(emailExist)
    if(user.email === emailExist) {
      console.log('Такой пользователь уже зарегистрирован');
    } else {
      await fetch(
        `http://localhost:3001/user/registration?name=${user.name}&email=${user.email}&address=${user.address}&phone=${user.phone}&password=${user.password}`
      )
      console.log('Пользователь успешно добавлен')
    }
  } catch(err: any) {
    console.log(err.message);
  }
};

export const auth = async (e: any, dispatch: any) => {
  e.preventDefault();
  try {
    const email = e.target.email.value;
    const password = e.target.password.value;
    const userDate = {
      email: email,
      password: password,
    }
    dispatch(userAuth(userDate));
  } catch (err) {
    console.log(err);
  }
};