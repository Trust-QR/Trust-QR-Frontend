"use client";
import { useState ,useContext} from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./signup.module.css";
import { get_api_url } from '../utils'
import {loginContext} from '../layout'

function passwordVal(password) {
  const minL = 8;
  const upper = /[A-Z]/.test(password);
  const lower = /[a-z]/.test(password);
  const sSymbol = /[!@#$%&*]/.test(password);

  return password.length >= minL && upper && lower && sSymbol;
}
function emailVal(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export default function Signup() {
  const url = get_api_url();
  const [result, setResults] = useState(null);
  const [formKey, setFormKey] = useState(0);
  const router = useRouter();
  const signup = useContext(loginContext);

  console.log("Printing URL : ", url);

  async function signupHandler(event) {
    event.preventDefault();

    const postData = {};

    if (event.target.password1.value === event.target.password2.value) {
      if (
        passwordVal(event.target.password1.value) &&
        passwordVal(event.target.password2.value) &&
        emailVal(event.target.email.value)
      ) {
        postData.Email = event.target.email.value;
        postData.Password = event.target.password1.value;
      } else {
        window.alert(
          "* Password must be at least 8 character long\n* Must contain at least one upper and one lower case letter\n* One number\n* One special character\n# While entering password be careful it would not be forgot if you forget your password."
        );
        console.log("MissMatch Password");
        event.target.reset();
        return;
      }
    } else {
      window.alert(
        "$ Password does not matched!\n$ Please Enter same password.\n$ While entering password be careful it would not be forgot if you forget your password."
      );
      console.log("$ MissMatch Password !");
      event.target.reset();
      return;
    }

    console.log(postData);
    // const JSONdata = ;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(postData),
    };
    // console.log("Props URL Printing here : ", url);
    // console.log(JSONdata);
    try {
      const response = await fetch(`${url}api/users/signup`, options);
      // console.log("response : ",response)
      const result = await response.json();

      if (!response.ok) {
        window.alert("Something Went wrong");
      } else if (result['id'] != 'User already exist') {
        event.target.reset();
        const id = result["id"];
        signup(id)
        router.push("/dashboard");
        window.alert("Successfully Registered");
      }
      else {
        window.alert(result['id']);
        event.target.reset();
      }
    } catch (error) {
      console.log(error)
      // setError('Something went wrong. Please try again later');
    }
    setResults(null);
  }

  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.wrapperDiv}>
          <div className={styles.authBtn}>
            <Link href="/signup">SIGN UP</Link>
          </div>

          <h2>Register On Trust QR</h2>
          <div className={styles.Smain_container}>
            <form
              action="#"
              method="post"
              onSubmit={signupHandler}
              key={formKey}
              className={styles.form}
            >
              <div className={styles.form_container}>
                <div className={styles.email}>
                  <label htmlFor="email">Email </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@xyz.com"
                    required
                    min={5}
                  />
                </div>
                <div>
                  <div className={styles.password1}>
                    <label htmlFor="password" required>
                      Password 
                    </label>
                    <input
                      type="password"
                      name="password1"
                      id="password1"
                      placeholder="Create Password"
                      required
                    />
                  </div>
                  <div className={styles.password2}>
                    <label htmlFor="password" required>
                      Confirm Password 
                    </label>
                    <input
                      type="password"
                      name="password2"
                      id="password2"
                      required
                      placeholder="Confirm Password"
                    />
                  </div>
                </div>
                <input
                  type="submit"
                  value="Register"
                  id="smbtn"
                  className={styles.smbtn}
                />
              </div>
              <div className={styles.authDiv}>
                <div>
                  Already have an account?{" "}
                  <Link href="/login" className={styles.authLink}>
                    {" "}
                    LOG IN
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
