import React from "react";

import { Modal, Button } from "react-bootstrap";

import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from "./CustomForm";

function NewsLetter({ show, handleClose }) {
  const postUrl =
    "https://fungi-fi.us14.list-manage.com/subscribe/post?u=1242764b6c0abcd5c58c0def5&amp;id=e638f6e138&amp;f_id=0016eee0f0";
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Subscribe to our Newsletter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MailchimpSubscribe
            url={postUrl}
            render={({ subscribe, status, message }) => (
              <CustomForm
                status={status}
                message={message}
                onValidated={(formData) => subscribe(formData)}
              />
            )}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default NewsLetter;
