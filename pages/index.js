import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/header";
import { requests, user } from "@/requests/requests";
import { useEffect, useReducer } from "react";
import { CHANGE_CAPTAIN, REMOVE_PERSON } from "@/components/useReducer/actions";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const getData = () => {
    requests().then((res) => {
      console.log(res);
    });
  };

  const login = () => {
    user({
      name: "Eniola",
      email: "sample@gmail.com",
    }).then((response) => {
      console.log(response);
    });
  };

  useEffect(() => {
    getData();
    login();
  }, []);

  // reducer setup
  const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
      case CHANGE_CAPTAIN:
        return {
          ...state,
          classCaptain: state.classCaptain === "Eni" ? "New Captain" : "Eni",
        };
      case REMOVE_PERSON:
        let newPeople = state.people.filter(
          (person) => person.id !== payload.id
        );
        return {
          ...state,
          people: newPeople,
        };
      default:
        return state;
    }
  };

  const initialState = {
    people: [
      { name: "Eni", id: 33 },
      { name: "Sule", id: 44 },
      { name: "Jide", id: 55 },
    ],
    classCaptain: "Eni",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const changeCaptain = () => {
    dispatch({ type: CHANGE_CAPTAIN });
  };

  const removePerson = (id) => {
    dispatch({ type: REMOVE_PERSON, payload: { id: id } });
  };

  return (
    <>
      <Header title="Home | Coin and Events page" imageUrl="/favicon.ico" />
      <main className={styles.main}>
        <h1>Home page</h1>
        <div className="row">
          <div className="col-8">hello</div>
          <div className="col-2">hi</div>
        </div>
        <h3>reducer test</h3>
        <div className="mb-5 mt-3">
          {state.people.map((person, i) => {
            return (
              <div className="mb-3">
                <h4>{person.name}</h4>
                <button onClick={() => removePerson(person.id)}>remove</button>
              </div>
            );
          })}
        </div>
        <h4>Captain: {state.classCaptain}</h4>
        <button onClick={changeCaptain}>Click Captain</button>
      </main>
    </>
  );
}
