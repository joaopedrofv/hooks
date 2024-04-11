'use client';
import FormInput from "./components/FormInput";
import Button from "./components/Button";
import { useState } from "react";
export default function Home() {
  const handleClick = () => {};
  
  const onChange = () => {};


  return (
    <main>
    <FormInput label="Nome"  value="Maria" onChange={handleClick}/>
    <Button text="OK" onClick={onChange}/>
    </main>
  );
}
