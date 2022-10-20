import axios from 'axios';
import React,{Component} from 'react';

class ImportPhoto extends Component {

    state = {
        selectedFile: null
    };
    
    onFileChange = event => {
        this.setState({ selectedFile: event.target.files[0] });
    };

    onFileUpload = () => {
        const formData = new FormData();
        formData.append(
            "myFile",
            this.state.selectedFile,
            this.state.selectedFile.name
        );
        console.log(this.state.selectedFile);

        axios.post('https://nunesaccount.alwaysdata.net/APIDG8/IMG/handleIMG.php', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
            console.log(res);
        });
    };
    fileData = () => {
        if (this.state.selectedFile) {
            return (
                <div>
                    <h2>File Details:</h2>
                    <p>File Name: {this.state.selectedFile.name}</p>
                    <p>File Type: {this.state.selectedFile.type}</p>      
                    <p>
                        Last Modified:{" "}
                        {this.state.selectedFile.lastModifiedDate.toDateString()}
                    </p>
 
                </div>
            );
        }else{
            return (
                <div>
                    <br />
                    <h4>Intégrer une photo avant d'envoyer celle-ci</h4>
                </div>
            );
        }
    };
    
    render() {
        return (
            <div>
                <div className='flex'>
                    <input type="file" onChange={this.onFileChange} className={"bg-gray-200 text-black p-4 rounded-lg"}/>
                    <div className='p-2'>
                        <button onClick={this.onFileUpload} className={"bg-red-600 text-white p-4 rounded-lg"}>
                            Ajouter
                        </button>
                    </div>
                </div>
            {this.fileData()}
            </div>
        );
    }
}
 
export default ImportPhoto;