import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from 'react';
import { Button, Modal, Input } from 'react-bootstrap';
import NavDropdown from "react-bootstrap/NavDropdown";
 
function UpdateExams() {
 
    const [show, setShow] = useState(false);
 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
 
       <div class="container ">
          <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded"> 
          <div class="row ">
          <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                <option selected>Subjects</option>
                <option value="Maths">Maths</option>
                <option value="Literature">Literature</option>
                <option value="English">English</option>
            </select>


           <div class="col-sm-3 mt-5 mb-4 text-gred">
              <div className="search">
                <form class="form-inline">
                 <input class="form-control mr-sm-2" style={{width:"100%",height:"100%"}} type="search" placeholder="Search Exam" aria-label="Search"/>  
                 <Button  class="mt-3 btn btn-primary"> Search</Button>
                          </form>  
                          
              </div>    
              </div>  
              <div class="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{color:"green"}}><h2><b>Update Exams </b></h2></div>
              <div class="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
              <Button variant="primary" onClick={handleShow}>
                Add Exam 
              </Button>
             </div>
           </div>  
            <div class="row">
                <div class="table-responsive " >
                 <table class="table table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                                <th>Subjects</th>
                                <th>Exam Code</th>
                                <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr>
                            <td>1</td>
                                <td>Maths</td>
                                <td>To01</td>
                                <td>20</td>
                            
                            <td>
                               
                                <a href="#" class="edit" title="Edit" data-toggle="tooltip" ><i class="material-icons">&#xE254;</i></a>
                                <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}><i class="material-icons">&#xE872;</i></a>
                                 
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Literature</td>
                            <td>Nv01</td>
                            <td>20</td>
                           
                            <td>
                        
                                <a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                                <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}><i class="material-icons">&#xE872;</i></a>
                            </td>
                        </tr>
                         
 
                        <tr>
                            <td>3</td>
                            <td>English</td>
                            <td>En01</td>
                            <td>20</td>
                            
                            <td>
                            
                                <a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                                <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}><i class="material-icons">&#xE872;</i></a>
                            </td>
                        </tr>
 
                        <tr>
                            <td>4</td>
                            <td>Physics</td>
                            <td>Ph01</td>
                            <td>20</td>
                           
                            <td>
                           
                                <a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                                <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}><i class="material-icons">&#xE872;</i></a>
                            </td>
                        </tr>
 
 
                        <tr>
                            <td>5</td>
                            <td>Chemistry</td>
                            <td>Ch01</td>
                            <td>20</td>
                           
                            <td>
                        
                                <a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                                <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}><i class="material-icons">&#xE872;</i></a>
                            </td>
                        </tr>
 
 
                        <tr>
                            <td>6</td>
                            <td>Biology</td>
                            <td>Bi01</td>
                            <td>20</td>
                           
                            <td>
                           
                                <a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                                <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}><i class="material-icons">&#xE872;</i></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>   
        </div>  
 
        {/* <!--- Model Box ---> */}
        <div className="model_box">
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Acount</Modal.Title>
        </Modal.Header>
            <Modal.Body>
            <form>
                <div class="form-group">
                    <input type="text" style={{width:"100%",height:"100%"}} class="form-control"   placeholder="Enter Subjects"/>
                </div>
                <div class="form-group">
                    <input type="text" style={{width:"100%",height:"100%"}} class="form-control"   placeholder="Enter Exam Code"/>
                </div>
                
                <div class="form-group mt-3">
                    <input type="Number" style={{width:"100%",height:"100%"}}  class="form-control"  placeholder="Enter Quantity "/>
                </div>
                
                  <button type="submit" class="btn btn-success mt-4">Add Exam</button>
                </form>
            </Modal.Body>
 
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
  
       {/* Model Box Finsihs */}
       </div>  
      </div>    
      </div>  
  );
}
 
export default UpdateExams;