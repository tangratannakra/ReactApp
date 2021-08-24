import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Excercise = () => {
  const [pets, setPets] = useState([
    // { name: "Cat1", species: "cat", age: "1", id: 123 },
    // { name: "Cat2", species: "cat", age: "2", id: 456 },
    // { name: "Cat3", species: "cat", age: "3", id: 789 }
  ]);

  useEffect(() => {
    if (localStorage.getItem("examplePetData")) {
      setPets(JSON.parse(localStorage.getItem("examplePetData")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("examplePetData", JSON.stringify(pets));
  }, [pets]);

  return (
    <>
      <ul>
        {pets.map(pet => (
          <Pet setPets={setPets} name={pet.name} species={pet.species} age={pet.age} key={pet.id} id={pet.id} />
        ))}
      </ul>

      <AddPetForm setPets={setPets} />
    </>
  );
};

export default Excercise;

function Pet(props) {
  function deleteItemHandler() {
    props.setPets(prev => {
      return prev.filter(pet => pet.id != props.id);
    });
  }

  return (
    <li data-key={props.id}>
      {props.name} is {props.species} and is {props.age} years old
      <button onClick={deleteItemHandler}>Delete</button>
    </li>
  );
}

function AddPetForm(props) {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState();
  const [age, setAge] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    props.setPets = props.setPets(prev => {
      return prev.concat({ name: name, species: species, age: age, id: Date.now() });
    });
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Add new pet</legend>
          <input type="text" placeholder="Name" onChange={e => setName(e.target.value)} />
          <input type="text" placeholder="species" value={species} onChange={e => setSpecies(e.target.value)} />
          <input type="text" placeholder="age in years" value={age} onChange={e => setAge(e.target.value)} />
          <button>Add Pet</button>
        </fieldset>
      </form>
      <ul></ul>
    </>
  );
}
