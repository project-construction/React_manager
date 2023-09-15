import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom"

import {
    Button,
    Card,
    CardBody,
    CardTitle, Table,
} from "reactstrap";
import {pdfjs} from "react-pdf";
import {useDropzone} from "react-dropzone";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFList = () => {
    const [signs, setSigns] = useState([]);
    const [beforeId, setBeforeId] = useState("");
    const [expandedRows, setExpandedRows] = useState({});
    const [selectedPDF, setSelectedPDF] = useState(null);

    const now = new Date();
    const date = (now.getFullYear()%100).toString() + "-" + (now.getMonth() + 1).toString().padStart(2, '0') + "-" + (now.getDate()).toString().padStart(2, '0');
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState(null);
    const [encodeImage, setEncodeImage] = useState(null);

    useEffect(() => {
        fetchNotices();

        if (file) {
            setTitle(file.path.split('.')[0]);
            // FileReader를 사용하여 파일을 base64로 인코딩합니다.
            const reader = new FileReader();
            reader.onload = (e) => {
                setEncodeImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    }, [file]);

    const fetchNotices = async () => {
        try {
            const response = await fetch("http://localhost:8080/sign/manager/all");
            const data = await response.json();
            setSigns(data);
        } catch (error) {
            console.error("데이터를 가져오는 중 오류 발생:", error);
        }
    };

    const onDrop = (acceptedFiles) => {
        // 여기서는 첫 번째 파일만 사용합니다.
        const selectedFile = acceptedFiles[0];
        setFile(selectedFile);
    };

    const handleSubmit = () => {
        console.log(JSON.stringify({title, encodeImage, date}));

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title, encodeImage, date}),
            mode: 'cors'

        };

        fetch('http://localhost:8080/sign/manager/upload', requestOptions)
            .then(response => response)
            .then(data => {
                console.log('submitted:', data);
            })
            .catch(error => {
                console.error('Error submitting:', error);
            });
        window.location.reload()
    }

    const handleDelete = async (signId) => {
        const shouldDelete = window.confirm("정말로 삭제하시겠습니까?");
        if (shouldDelete) {
            await fetch(`http://localhost:8080/sign/manager/delete/${signId}`, {
                method: 'DELETE',
                mode: 'cors'
            });
            window.location.reload()
        }
    };

    const toggleRow = (signId) => {
        if (beforeId !== signId) {
            // 이전에 확장되었던 행과 현재 클릭한 행이 다를 때만 업데이트
            setExpandedRows((prevState) => ({
                ...prevState,
                [beforeId]: false,
                [signId]: true,
            }));
            setBeforeId(signId);
        }
    };

    const displayPDF = (pdfData) => {
        setSelectedPDF(pdfData);
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: '.pdf' });

    return (
        <div>
            <Card>
                <CardTitle tag="h6" className="border-bottom p-3 mb-2 mt-2">
                    <h2 className="m-1">&nbsp;전자서명</h2>
                    <div className="m-1" {...getRootProps()} style={dropzoneStyles}>
                        <input {...getInputProps()} />
                        <p>PDF 파일을 여기에 끌어다 놓거나 클릭하여 업로드하세요.<br />
                            {file&&(<p> 현재 업로드 된 파일: {file.path} </p>)

                            }
                        </p>
                    </div>
                    {file && (
                        <Button
                            type="submit"
                            className="btn"
                            color="primary"
                            onClick={handleSubmit}
                            style = {{marginTop: "10px"}}>
                            저장
                        </Button>
                    )}
                </CardTitle>

                <CardBody className="">
                    <Table striped>
                        <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>날짜</th>
                            <th>선택</th>
                        </tr>
                        </thead>
                        <tbody>
                        {signs.map((sign) => (
                            <React.Fragment key={sign.id}>
                                <tr>
                                    <th scope="row">{sign.id}</th>
                                    <td style={{ width: "72%" }}>
                                        <Link
                                            className="Buttons-link"
                                            style={{ textDecoration: "none" }}
                                            onClick={() => {
                                                toggleRow(sign.id);
                                                displayPDF(sign.encodedImage);
                                            }} // PDF 열기
                                        >
                                            {sign.pdfname}
                                        </Link>
                                    </td>
                                    <td>{sign.uploadDate}</td>
                                    <td>
                                        <Button
                                            className="btn"
                                            color="secondary"
                                            onClick={() => {
                                                // 버튼 클릭 시 수행할 동작 추가
                                            }}
                                        >
                                            선택
                                        </Button>
                                    </td>
                                </tr>
                                {expandedRows[sign.id] && (
                                    <tr>
                                        <td colSpan="3">
                                            {selectedPDF && (
                                                <div>
                                                    <iframe
                                                        title="PDF Viewer"
                                                        width="100%"
                                                        height="500px"
                                                        src={`${selectedPDF}#toolbar=0`}
                                                    ></iframe>
                                                </div>
                                            )}
                                        </td>
                                        <td>
                                            <Button
                                                className="btn"
                                                color="danger"
                                                onClick={() => handleDelete(sign.id)}
                                            >
                                                삭제
                                            </Button>
                                        </td>
                                    </tr>
                                )}
                            </React.Fragment>
                        ))}
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
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

export default PDFList;