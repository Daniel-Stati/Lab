import React, { useState } from 'react';

interface MyInfo {
    name: string;
    age: number;
    id: string;
}

export function Pagina2() {
    const [myInfo, setMyInfo] = useState<MyInfo>({
        name: 'Daniel Stati',
        age: 175,
        id: 'CR-211',
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setMyInfo({
            ...myInfo,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="container">
            <h1>Informația despre persoană</h1>
            <form className="main">
                <div className="input_cont">
                    <label htmlFor="name">Nume Prenume:</label>
                    <input className="input"
                        type="text"
                        id="name"
                        name="name"
                        value={myInfo.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="input_cont">
                    <label htmlFor="age">Înălțimea:</label>
                    <input className="input"
                        type="number"
                        id="age"
                        name="age"
                        value={myInfo.age}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="input_cont">
                    <label htmlFor="id">Grupa:</label>
                    <input className="input"
                        type="text"
                        id="id"
                        name="id"
                        value={myInfo.id}
                        onChange={handleInputChange}
                    />
                </div>
            </form>
        </div>
    );
}


