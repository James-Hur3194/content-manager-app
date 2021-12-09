import React, { useState, useEffect } from "react";

const ArrowFunction = _ =>
  <div>
    <h1>I am arrow function</h1>
  </div>



function CompA(props) {

  useEffect(() => {
    console.log("CompA useEffec!");
  }, [props.myProp1])
  return (
    <>
      <ArrowFunction />
      <h1>CompA</h1>
      <p>Hello Comp A</p>
      <div>My Prop1: {props.myProp1}</div>
      <div>My Prop2: {props.myProp2}</div>
      <div>My Prop3: {props.myProp3.toString()}</div>
      <div>My Prop4: {<props.myProp4 />}</div>

    </>
  )
}

class CompC extends React.Component {

  constructor() {
    super();
    this.state = {
      myValue: 10
    }
  }

  // state = {
  //   myValue: 10
  // }

  changeState(incrementor) {
    this.setState({
      myValue: incrementor
    })
  }
  render() {

    const { myValue } = this.state;
    const { myProp1, myProp2: MyProp2 } = this.props;
    return (
      <>
        <h1>Hello CompC</h1>
        Current Value: <h1> {this.state.myValue}</h1>
        <button onClick={() => this.changeState(myValue + 1)}>+</button>
        <button onClick={() => this.changeState(myValue - 1)}>-</button>
        <h2>{myProp1}</h2>
        <MyProp2 />
      </>
    )
  }
}

function CompB() {
  return (
    <>
      <h1>CompB</h1>
      <p>Hello Comp B</p>
    </>
  )
}

function MyComponent() {
  return <h1>My Component!</h1>
}

function Home() {
  const [myValue, setValue] = useState(0);
  const [myOtherValue, setOtherValue] = useState(100);

  useEffect(() => {
    //console.log("Use Effect Called!");
  }, [myValue, myOtherValue])

  return (
    <>
      Current Value: <h1> {myValue}</h1>
      <button onClick={() => setValue(myValue + 1)}>+</button>
      <button onClick={() => setValue(myValue - 1)}>-</button>
      <hr></hr>
      Other Value: <h1> {myOtherValue}</h1>
      <button onClick={() => setOtherValue(myOtherValue + 1)}>+</button>
      <button onClick={() => setOtherValue(myOtherValue - 1)}>-</button>
      {/* <CompA
        myProp1={myValue}
        myProp2="My Custom Value"
        myProp3={true}
        myProp4={() => <div>My NEW JSX!</div>}
      /> */}
      <CompC myProp1={myValue}
        myProp2={
          () =>
            <CompA
              myProp1={myValue}
              myProp2="My Custom Value"
              myProp3={true}
              myProp4={() => <div>My NEW JSX!</div>}
            />
        }
      />
    </>
  )
}

export default Home;
