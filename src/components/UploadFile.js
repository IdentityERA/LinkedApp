import React, { useState } from 'react';
import axios from 'axios';
import { message } from "antd";

const UploadFiles = () => {

  const [file, setfile] = useState()
  
  const onFormSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("myfile", file[0]);
  
      axios.post("http://localhost:4000/api/file-upload",formData)
          .then((response) => {
              message.success(response.data.message)
          }).catch((error) => {
              message.error(error.data.message);
      });
  }

  const onChange = (e) => {
      setfile(e.target.files);
  }

      return (
          <form onSubmit={(e)=>onFormSubmit(e)}>
              <input type="file" className="file-input" name="myImage" onChange= {(e)=>onChange(e)} />
              <button className="upload-button" type="submit">Upload</button>
          </form>
      )
  
}

export default UploadFiles;