import React, { useState } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa'; // Import the upload icon
import Sidebar from '../components/Sidebar';
import axios from 'axios';

const containerStyle = {
    display: 'flex',
    gap: '45px'
};

const childStyle = {
    marginLeft: '-27px',
    marginRight: '10px',
};

const buttonContainerStyle = {
    marginTop: '100px',
    alignItems: 'center' // Corrected typo here
};

const Results = () => {
    const [isFileUploaded, setIsFileUploaded] = useState(false);
    const [file, setFile] = useState(null);
    const [url, setUrl] = useState('');

    const handleFileUpload = (file) => {
        if (file) {
            console.log('Uploaded File:', file);
            const fileType = file.name.split('.').pop();
            alert(`File Uploaded Successfully! File Type: ${fileType.toUpperCase()}`);
    
            setIsFileUploaded(true);
        } else {
            setIsFileUploaded(false);
            alert('Please select a file to upload.');
        }
    };
    

    const handleSendResult = async () => {
        try {
            if (file) {
                const formData = new FormData();
                formData.append('file', file);
                await axios.post('http://localhost:5000/api/send-result', formData);
            } else if (url) {
                await axios.post('http://localhost:5000/api/send-result', { url });
            } else {
                alert('Please upload a file or provide a URL.');
                return;
            }

            alert('Result sent successfully!');
        } catch (error) {
            console.error('Error sending result:', error);
            alert('Error sending result. Please try again.');
        }
    };

    const handleUrlSubmit = () => {
        // Handle URL submission logic here
        console.log('Submitted URL:', url);
        setIsFileUploaded(true); // Assuming you want to enable the button when the URL is submitted
        alert('URL Submitted Successfully!');
    };

    return (
        <div style={containerStyle}>
            <div style={childStyle}>
                <Sidebar />
            </div>
            <div style={childStyle}>
                <h1 style={{ color: '#1eb2a6', fontSize: '50px', marginBottom: '50px', fontFamily: "Times New Roman", marginTop: "50px" }}>Upload Result</h1>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ border: '2px dashed #1eb2a6', borderRadius: '10px', background: "#f0f0f0", display: 'inline-block', padding: '10px',marginLeft: '180px', marginBottom: '50px',marginTop: '30px', }}>
                        <label htmlFor="fileInput" style={{ cursor: 'pointer', display: 'block', width: '300px', margin: '0 auto',height:'50px',paddingTop:'10px' }}>
                            <FaCloudUploadAlt style={{ marginRight: '10px', fontSize: '30px', verticalAlign: 'middle' }} />
                            <span style={{ verticalAlign: 'middle', fontSize: '18px',fontWeight:'20px' }}>Upload</span>
                            <input type="file" accept=".pdf" id="fileInput" style={{ display: 'none' }} onChange={(e) => handleFileUpload(e.target.files[0])} />
                        </label>
                    </div>
                    <div style={{ marginTop: '20px',marginLeft: '35px', }}>
                    <label htmlFor="urlInput" style={{ color: '#888', marginTop: '10px', marginRight: '10px', }}>...or paste URL:</label>
                    <input
                        type="text"
                        id="urlInput"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        style={{ width: '1000px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginTop: '5px', height: '50px' }}
                    />
                    </div>
                </div>
                <div style={{ textAlign: 'center', marginLeft: '200px' }}>
            <button
                type="button"
                disabled={!isFileUploaded}
                onClick={handleSendResult}
                style={{
                    fontSize: '20px',
                    padding: '15px',
                    width: '200px',
                    ...buttonContainerStyle,
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.7)',
                    borderRadius: '8px',
                }}
            >
                            Send Result
                        </button>
                </div>
            </div>
        </div>
    );
};

export default Results;
