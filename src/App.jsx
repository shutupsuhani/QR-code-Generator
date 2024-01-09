import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import "./App.css";
const App = () => {
  const [username, setUsername] = useState('');
  const [qrCodeData, setQrCodeData] = useState('');
  const [qrCodeGenerated, setQrCodeGenerated] = useState(false)

  const generateQRCode = () => {
    if (username.trim() === '') {
      alert('Please enter a username');
      return;
    }
  
    const qrCodeData = username;  // Just use the username directly
    setQrCodeData(qrCodeData);
    setQrCodeGenerated(true);  
  };

  const downloadQRCode = () => {
    const canvas = document.getElementById('qrcode-canvas');
    const qrCodeDataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = qrCodeDataUrl;
    link.download = `${username}_qr_code.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      
      <div className='container'>
        
          <p>Enter your Text or URL</p>
          <input type="text" placeholder='Enter your Text or URL' value={username} onChange={(e) => setUsername(e.target.value)} />
        
        <button className='bt1' onClick={generateQRCode}>Generate QR Code</button>
      
      {qrCodeData && (
        <div>
          <div id="imgBox">
          <QRCode id="qrcode-canvas" value={qrCodeData} size={200} />
          </div>
          <button className='bt2' onClick={downloadQRCode}>Download QR Code</button>
        </div>
      )}

      </div>
    </div>
  );
};

export default App;
