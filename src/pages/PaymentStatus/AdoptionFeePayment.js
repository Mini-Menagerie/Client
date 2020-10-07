import React, { useState, useEffect } from 'react'
import Swal from "sweetalert2";

import axios from "../../helpers/axios"

const AdoptionFeePayment = () => {
    // const [success] = useState({ status: "Payment of Adoption Fee has been Successful" });
    // const [adoption, setAdoption] = useState([]); // petUpforAdoption
    // const [adopter, setAdopter] = useState([]);

    // const getUserLogin = () => {
    //     let userLogin = JSON.parse(localStorage.getItem("user"));
    //     let idUser = userLogin.idUser._id;
    //     return idUser;
    // };

    // const getPetUpForAdopt = async () => {
    //     let idUser = await getUserLogin();
    //     let pets = await axios.get("petUpForAdoption");
    //     if (pets.status === 200) {
    //         let filteredPets = await pets.data.result.filter((item) => {
    //             return item.idPet.idUser === idUser;
    //         });
    //         setAdoption(filteredPets);
    //         localStorage.setItem("pets", JSON.stringify(filteredPets));
    //     } else {
    //         setAdoption([]);
    //     }
    // };

    // const getAdopter = async () => {
    //     const dataPet = await JSON.parse(localStorage.getItem("pets"));
    //     let idPet =
    //         dataPet !== null &&
    //         dataPet.map((item) => {
    //             return item.idPet._id;
    //         });
    //     if (idPet.length > 0) {
    //         idPet = idPet[0];
    //     }
    //     return idPet;
    // };

    // const getDataAdopter = async () => {
    //     let idPetAdopter = await getAdopter();

    //     const adopter = await axios.get("formRequest");
    //     if (adopter.status === 200) {
    //         let filteredAdopter = adopter.data.result.filter(
    //             (item) => item.idPet._id === idPetAdopter && item.status === "Waiting for Payment"
    //         );
    //         console.log(filteredAdopter);
    //         setAdopter(filteredAdopter);
    //         localStorage.setItem("adoptform", JSON.stringify(filteredAdopter))
    //     }
    // };

    // const url = `formRequest/${adopter._id}`;

    // const successPayment = () => {
    //     axios.put(url, success).then(function (result) {
    //         console.log(result);
    //         window.location.reload();
    //     });
    //     return success;
    // };

    const [payment] = useState({ status: "Payment Fee is Complete" });

    const adoptData = JSON.parse(localStorage.getItem("adoptform"));
    const url = `formRequest/${adoptData._id}`;

    const successPayment = () => {
        axios.put(url, payment).then(function (result) {
            console.log(result);
        });
        return payment;
    };

    const redirect = () => {
        window.location.replace("/about-me");
    };

    const PaymentLoading = () => {
        let timerInterval
        Swal.fire({
            title: 'Please wait a moment',
            text: 'you will be redirected soon',
            imageUrl: 'https://i.ibb.co/1GxhcgS/hiclipart-com.png',
            timer: 3000,
            timerProgressBar: true,
            showConfirmButton: false,
            willOpen: () => {
                timerInterval = setInterval(() => {
                    const content = Swal.getContent()
                    if (content) {
                        const b = content.querySelector('b')
                        if (b) {
                            b.textContent = Swal.getTimerLeft()
                        }
                    }
                }, 100)
            },
            onClose: () => {
                clearInterval(timerInterval)
                successPayment();
                redirect();
            }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
            }
        })
    }


    // useEffect(() => {
    //     PaymentLoading();
    //     successPayment();
    // }, [successPayment]);

    useEffect(() => {
        PaymentLoading();
        
    }, []);
    return (
        <div>

        </div>
    )
}

export default AdoptionFeePayment