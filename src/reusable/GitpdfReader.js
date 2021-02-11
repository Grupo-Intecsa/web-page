import React from 'react'
import PDFViewer from 'mgr-pdf-viewer-react'

export default function GitpdfReader({ setModal }){
    return (
        <div onClick={() => setModal(false)}>
        <PDFViewer
        scale="1.2"
        navigation={false}
        document={{
        url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf'
        }} 
        />
        </div>
    );
}