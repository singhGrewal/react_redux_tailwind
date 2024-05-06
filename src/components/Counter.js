// import React from "react";
// import { connect } from "react-redux";
// import { useDispatch } from "react-redux";
// import {addCounter} from "../actions/counter";
//
// const Counter = () => {
//     const dispatch = useDispatch();
//
//     // dispatch(addPost(newPost))
//     const handleIncrement = () =>{
//         console.log("1======")
//         dispatch(addCounter(1))
//
//     }
//
//     const hanldeDecrement = () =>{
//         dispatch(addCounter(1))
//
//     }
//
//     return (
//         <div>
//             <p className="counter_title">Counter:</p>
//             <button className="button" onClick={handleIncrement}>
//                 Increment
//             </button>
//             <button className="button" onClick={hanldeDecrement}>
//                 Decrement
//             </button>
//         </div>
//     );
// };
//
// // const mapStateToProps = (state) => ({
// //     counter: state.counter
// //     //  Use 'counter: state.counter.counter' and replace the above line if you are using combineReducers to ensure that 'counter' matches the correct key in your store.
// // });
// //
// // const mapDispatchToProps = (dispatch) => ({
// //     increment: () => dispatch({ type: "INCREMENT" }),
// //     decrement: () => dispatch({ type: "DECREMENT" })
// // });
//
// export default connect()(Counter);
