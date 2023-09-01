import React, { useState } from 'react';

function FileUpload({ uploadUrl, onUpload }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      fetch(uploadUrl, {
        method: 'POST',
        body: formData,
      })
      .then(response => response.json())
      .then(data => {
        onUpload(data);
      })
      .catch(error => {
        console.error('Error uploading file:', error);
      });
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default FileUpload;
