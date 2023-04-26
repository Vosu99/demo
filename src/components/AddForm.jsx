import { Form, Button, FormGroup } from "react-bootstrap";

const AddForm = () => {
  return (
    <Form>
      <Form.Group>
        <Form.Control  type="text"  style={{width:"100%",height:"100%"}} placeholder="Name *" required />
      </Form.Group>
      <br />
      <Form.Group>
        <Form.Control type="text"  style={{width:"100%",height:"100%"}} placeholder="Password *" required />
      </Form.Group>
      <br />
      <Form.Group>
        <Form.Control type="text"  style={{width:"100%",height:"100%"}} placeholder="Confirm Password *" required />                              
      </Form.Group>                  
    </Form>              
  );
};          
export default AddForm;                                                 