import React from 'react';
import Card from "./components/card/card";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

const App = () => {
    return (
        <div>
            <Header title={"Şöför Bilgileri"} desc={"Şöför Bilgileri Sayfası"}/>
            <div style={{display: "flex", flexDirection: "row"}}>
                <Card driverName={"Faru"} driverSurname={"Sönmez"} truckPlate={"38HJ914"}/>
                <Card driverName={"Faru"} driverSurname={"Sönmez"} truckPlate={"38HJ800"}/>
            </div>
            <div>
                <Footer title={"Footer Title"} desc={"abc"}/>
            </div>
        </div>
    );
}

export default App;
