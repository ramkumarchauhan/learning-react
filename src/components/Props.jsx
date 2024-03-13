import React from "react";

export const Message = () => {
    const inputText = prompt('Enter Name: ');
    return <p>You entered : <strong>{inputText}</strong></p>
}

const cars = ["BMW", "Audi", "TATA", "Jaguar", "Mustang"];

export const CarList = () => {
    return (
        <ul>
            {/* If we use map(()=>{}) instead of map(()=>()) -> we need to write return statement too. */}
            {cars.map(car => (
                <li>{car}</li>
            ))}
        </ul>
    );
};

const userDetail = {
    userName: "Ram",
    age: 22,
    designation: "Software Enginner"
};

export const Details = () => {
    return (
        <div>
            <h2>User Detail</h2>
            <p>The name of the user is : {userDetail.userName}</p>
            <ul>
                {Object.entries(userDetail).map(([key, value]) => (
                    <li key={key}>{key} : {value}</li>
                ))}
            </ul>
        </div>
    );
};