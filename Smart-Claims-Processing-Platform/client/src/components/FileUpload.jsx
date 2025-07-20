import React, { useState } from 'react';

function FileUpload({ onUpload }) {
  const [file, setFile] = useState(null);
  const [previewText, setPreviewText] = useState('');

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    setFile(selected);
    setPreviewText(selected ? selected.name : '');
  };

  const handleUpload = () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('document', file);

    onUpload(formData); // Pass to parent component or service
  };

  return (
    <div className="file-upload">
      <label>
        Upload Claim Document:
        <input
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={handleFileChange}
        />
      </label>
      {previewText && <p>Selected: {previewText}</p>}
      <button onClick={handleUpload} disabled={!file}>
        Submit Document
      </button>
    </div>
  );
}

export default FileUpload;
