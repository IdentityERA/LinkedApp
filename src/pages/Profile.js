import { Container } from "@mui/material";
import React from "react";
import { Form, message } from "antd";
import axios from "axios";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../Redux/alertSlice";
import UploadFiles from "../components/UploadFile";

const Profile = () => {
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      const response = await axios.post("profile", values);
      dispatch(hideLoading());
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      message.error(error.message);
    }
  };
  return (
    <Container>
      <div >
        <Form layout="vertical" onFinish={onFinish} className="input-field">
          <Form.Item label="First Name" name="FirstName">
            <input type="text" />
          </Form.Item>
          <Form.Item label="Last Name" name="LastName">
            <input type="text" />
          </Form.Item>
          <Form.Item label="HeadLine" name="HeadLine">
            <input type="text" />
          </Form.Item>
          <Form.Item label="Position" name="Position">
            <input type="text" />
          </Form.Item>
          <Form.Item label="Education" name="Education">
            <input type="text" />
          </Form.Item>
          <Form.Item label="Country" name="Country">
            <input type="text" />
          </Form.Item>
          <Form.Item label="City" name="City">
            <input type="text" />
          </Form.Item>
          <Form.Item label="Phone" name="Phone">
            <input type="text" />
          </Form.Item>
          <UploadFiles/>
          <button className="primary-btn" type="submit">
            Create
          </button>
        </Form>
      </div>
    </Container>
  );
};

export default Profile;
