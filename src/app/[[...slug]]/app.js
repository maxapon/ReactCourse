"use client";
import dynamic from "next/dynamic";

const AppComponent = dynamic(() => import("../../components/app/component"), 
{
    ssr: false, //ssr - Server Side Rendering
});

export default function App() 
{
    return <AppComponent />
}