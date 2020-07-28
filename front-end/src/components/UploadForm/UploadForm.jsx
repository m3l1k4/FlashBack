import React from 'react'
import axios from "axios";


import './UploadForm.scss'

export default function UploadForm({ handleUpload }) {


    handleUpload = (event) => {
        event.preventDefault();
        const idnum = String(new Date().getTime());

        let newUpload = {
            id: idnum,
            name: event.target.newuploadtitle.value,
            game: event.target.newuploaddesc.value,
            email: event.target.newemail.value,


        };

        axios
            .post('/requests', newUpload)

        event.target.reset();
    };




    return (
        <div className="upload-request">
            <div className="upload-request__header">
                <h1 className="upload-request__header--text">  Game Request Form</h1>
            </div>



            <form onSubmit={handleUpload} className="upload-request__form" id="submit-upload">
                <div className="upload-request__form--body" >
  
                    <div className="upload-request__form--body__field">
                        <p className="upload-request__form--body__field--title">NAME</p>
                        <textarea name="newuploadtitle" placeholder="Add a title to your request" id="upload-content-title" className="upload-request__form--body__field--upload-title"
                            required></textarea>

                        <p className="upload-request__form--body__field--title">EMAIL</p>
                        <textarea name="newemail" placeholder="Enter email" id="upload-content-email" className="upload-request__form--body__field--upload-title"
                            required></textarea>

                        <p className="upload-request__form--body__field--title">REQUEST DETAILS</p>
                        <textarea name="newuploaddesc" placeholder="Add a new upload" id="upload-content-dsc" className="upload-request__form--body__field--upload-desc"
                            required></textarea>



                    </div>

                </div>

                <div className="upload-request__form--options">
                    <button type="submit" className="upload-request__form--options__button"
                        id="upload-submit-button">SUBMIT</button>


                </div>
            </form>


        </div>
    )
}