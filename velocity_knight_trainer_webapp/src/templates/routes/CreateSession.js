import { useState } from "react";
import { Link } from "react-router-dom"
import '../../styles/Const.css';
import '../../styles/CreateSession.css';
import { add_icon } from "../../functions/ConstIcons";

export function CreateSession() {
    const [formdata, setFormData] = useState();
    const [add_exercise, addExercise] = useState();

    const handleChange = (e) => {
        setFormData({ ...formdata, [e.target.name]: e.target.value })
    }
    const [counter, setCounter] = useState(1);

    const handleClick = () => {
        setCounter(counter + 1);
    };

    function selector(_id, _length) {
        return <select className="" id={_id}>
            {Array.from(Array(_length)).map((c, index) => {
                return <option key={c} value={index}>{index}</option>
            })}
        </select>
    }
    return (
        <>
            <h2 className="create-new-session-header   m-auto-hor d-flex center-content ">CREATE NEW SESSION</h2>

            <form className="create-session-form flex-col m-auto-hor">

                <div>
                    <label htmlFor="session_name" className="fw-bold d-flex center-content">Session Name</label>
                    <input onChange={handleChange} defaultValue={typeof '' === 'object' ? '' : ''} name="session_name" type='text' />
                </div>
                <div className="exercise_name_cont flex-col">

                    <div className="add_exercise  m-auto-vert">
                        <a className="d-flex"
                            onClick={handleClick}
                        >{add_icon}</a>
                    </div>

                    {Array.from(Array(counter)).map((c, index) => {

                        return <div key={c} className="exercise_input_label fill d-flex wrap">
                            <label htmlFor="session_name" className="fw-bold d-flex center-content">
                                Exercise #{index + 1}</label>
                            <div className="session-name flex-col j-sb">
                                <h4 className="w-100 d-flex center-content">Exercise Name</h4>
                                <input className="session_name" onChange={handleChange}
                                    defaultValue={typeof '' === 'object' ? '' : ''}
                                    name="session_name" type='text' />
                            </div>
                            <div className="number-reps flex-col j-sb">
                                <h4 className="w-100 d-flex center-content">Reps</h4>
                                {selector(' ', 15)}


                            </div>
                            <div className="number-sets flex-col j-sb">
                                <h4 className="d-flex w-100 center-content">Sets</h4>
                                {selector(' ', 15)}


                            </div>
                            <div className="number-rest flex-col sb">
                                <h4 className="d-flex w-100 center-content">Rest</h4>
                                {selector('', 15)}


                            </div>

                        </div>
                    })}
                </div>

            </form >






        </>
    )
}