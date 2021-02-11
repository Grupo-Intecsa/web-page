import React from 'react'
import PDFViewer from 'mgr-pdf-viewer-react'

export default function GitpdfReader({ setModal }){
    return (
        <div onClick={() => setModal(false)}>
        <PDFViewer
        scale="1.2"
        navigation={false}
        document={{
        url: 'https://grupointecsa.com/curriculum/CV2.pdf'
        }} 
        />
        </div>
    );
}