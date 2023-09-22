
import React, { useState, useEffect } from 'react';
import { auth } from './Firebase';
import firebaseDB from './Firebase';
import Navbar from './hello/comps/navbar/Navbar';
import { useLoadScript } from "@react-google-maps/api";
import Map from "./Map";
import axios from 'axios';

const Receiver = ({ presentUser }) => {
    const [data, setData] = useState({
        name: '',
        bloodGroup: '',
        organs: '',
        email: '',
        phno: '',
    });

    const [bloodData, setBloodData] = useState([]);
    const [organsData, setOrgansData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredBloodData = bloodData.filter((item) =>
        item.bloodGroup.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredOrgansData = organsData.filter((item) =>
        item.organs.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        const fetchBloodData = () => {
            const bloodRef = firebaseDB.child('blood');
            bloodRef.on('value', (snapshot) => {
                const data = snapshot.val();
                if (data) {
                    const bloodArray = Object.values(data);
                    setBloodData(bloodArray);
                }
            });
        };

        const fetchOrgansData = () => {
            const organsRef = firebaseDB.child('organs');
            organsRef.on('value', (snapshot) => {
                const data = snapshot.val();
                if (data) {
                    const organsArray = Object.values(data);
                    setOrgansData(organsArray);
                }
            });
        };

        fetchBloodData();
        fetchOrgansData();
    }, []);

    const [showMap, setShowmap] = useState(false);

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        setData({
            name: "",
            organs: "",
            email: "",
            phno: "",
        })
        setShowmap(true);
    };

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "" // Add your API key
    });
    const sendMessage = async (type, phone) => {

        try {
            const response = await axios.get('http://localhost:3001/user', {
                phone: phone,
                type: type
            });
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    const message = () => {
        // filteredBloodData.map((item) => (
        //     sendMessage('blood', item.phno)
        // ))
        // filteredOrgansData.map((item) => (
        //     sendMessage('organ', item.phno)
        // ))
        sendMessage('blood', '+917997074680')
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="card col-sm-6 bg-light rounded contact-form">
                        <div className="card-body">
                            <h4 className="card-title text-center">Enter The Details</h4>
                            <form>
                                <div className="form-group m-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Name"
                                        name="name"
                                        value={data.name}
                                        onChange={changeHandler}
                                    />
                                </div>
                                <div className="form-group m-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Email"
                                        name="email"
                                        value={data.email}
                                        onChange={changeHandler}
                                    />
                                </div>
                                <div className="form-group m-2">
                                    <select
                                        className="form-control"
                                        name="bloodGroup"
                                        id="bloodGroup"
                                        onChange={changeHandler}
                                        value={data.bloodGroup}
                                    >
                                        <option value="">-- Blood Group --</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                        <option name='A+' bloodGroup="A+">A+</option>
                                        <option name='A-' bloodGroup="A-">A-</option>
                                        <option name='B+' bloodGroup="B+">B+</option>
                                        <option name='B-' bloodGroup="B-">B-</option>
                                        <option name='AB+' bloodGroup="AB+">AB+</option>
                                        <option name='AB-' bloodGroup="AB-">AB-</option>
                                    </select>
                                </div>
                                <div className="form-group m-2">
                                    <select
                                        className="form-control"
                                        name="organs"
                                        id="organs"
                                        onChange={changeHandler}
                                        value={data.organs}
                                    >
                                        <option value="">-- Organs --</option>
                                        <option value="Kidney">Kidney</option>
                                        <option value="Lungs">Lungs</option>
                                        <option name='Heart' organs="Heart">Heart</option>
                                        <option name='Pancreas' organs="Pancreas">Pancreas</option>
                                        <option name='Eyes' organs="Eyes">Eyes</option>
                                        <option name='Liver' organs="Liver">Liver</option>
                                        <option name='Intestines' organs="Intestines">Intestines</option>
                                        <option name='BoneMarrow' organs="BoneMarrow">BoneMarrow</option>
                                    </select>
                                </div>
                                <div className="form-group m-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your Mobile Number"
                                        name="phno"
                                        value={data.phno}
                                        onChange={changeHandler}
                                    />
                                </div>
                                <p>Click <b>"Allow"</b> to access your current location</p>
                                <button
                                    className="btn btn-dark btn-block m-2"
                                    onClick={submitHandler}
                                >
                                    Find Donars
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                {(showMap) && (
                    <>
                        <Map bloodData={filteredBloodData} organData={filteredOrgansData} />
                        <button
                            className="btn btn-dark btn-block m-2"
                            onClick={message}
                        >
                            Send Message
                        </button>
                    </>
                )}
            </div>

        </>
    );
};

export default Receiver;

