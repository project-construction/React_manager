import React, { useState } from 'react';
import {pdfjs} from "react-pdf";
import { useDropzone } from 'react-dropzone';
import {
    Button
} from "reactstrap";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PDFUpload() {
    const [file, setFile] = useState(null);

    const onDrop = (acceptedFiles) => {
        // 여기서는 첫 번째 파일만 사용합니다.
        const selectedFile = acceptedFiles[0];
        setFile(selectedFile);
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: '.pdf' });

    return (
        <div>
            <div {...getRootProps()} style={dropzoneStyles}>
                <input {...getInputProps()} />
                <p>PDF 파일을 여기에 끌어다 놓거나 클릭하여 업로드하세요.</p>
            </div>
            {file && (
                <iframe
                    title="PDF 뷰어"
                    src={URL.createObjectURL(file)+"#toolbar=0&navpanes=0&scrollbar=0"}
                    width="100%"
                    height="500px"
                    style = {{marginTop: "20px"}}
                />
            )}
            {file && (
                <Button
                    type="submit"
                    className="btn"
                    color="primary"
                    style = {{marginTop: "10px"}}>
                    저장
                </Button>
            )}
        </div>
    );
};

const dropzoneStyles = {
    border: '2px dashed #ccc',
    borderRadius: '4px',
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer',
};

const pdfContainerStyles = {
    marginTop: '20px',
};

export default PDFUpload;
