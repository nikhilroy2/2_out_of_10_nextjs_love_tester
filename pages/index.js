import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRef, useState, useEffect } from 'react';

export default function Home() {
  return (
    <div className={styles.container}>
      <style jsx global>
        {
          `
          #LoveTester{
            background: rgb(63,94,251);
            background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);
            padding: '25px';
          };
        
          `
        }
      </style>
      <LoveTester></LoveTester>
    </div>
  );
}

const LoveTester = () => {
  const [result, setResult] = useState();
  let yourName = useRef()
  let partnerName = useRef()
  //console.log(yourName.current.value)

  let resultNum = 0;
  const btnSubmitHandle = () => {
    let resultRandom = ~~(Math.random() * 100);

    if (yourName.current.value != '' && partnerName.current.value != '') {
      let updateNum = setInterval(() => {
        resultNum++;
        // result output
        setResult(`${yourName.current.value} loved ${resultNum}% to ${partnerName.current.value}`)
        // clear
        if (resultRandom === resultNum) {
          clearInterval(updateNum);
        }
      }, 50);
    } else if (yourName.current.value == '') {
      alert('Please Enter Your Name')
    } else if (partnerName.current.value == '') {
      alert('Please Enter Your Partner Name')
    }
  }
  return (
    <div id="LoveTester">
 
      <div className="input_group">
        <label htmlFor="">Enter Your Name:</label>
        <input ref={yourName} type="text" />
      </div>
      <div className="input_group">
        <label htmlFor="">Enter Your Partner Name:</label>
        <input ref={partnerName} type="text" className="input_group" />
      </div>
      <div className="input_submit_group">
        <button className="btn_submit" onClick={() => btnSubmitHandle()}>
          Submit
        </button>
      </div>
      <div className="input_result_group">
        {result}
      </div>
    </div>
  )
};
