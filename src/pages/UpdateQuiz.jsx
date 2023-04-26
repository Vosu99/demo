import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from 'react';
import { Button,Modal,Input } from 'react-bootstrap';
 
function UpdateQuiz() {
 
    const [show, setShow] = useState(false);
 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
 
       <div class="container ">
          <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded"> 
          <div class="row ">
           
           <div class="col-sm-3 mt-5 mb-4 text-gred">
              <div className="search" >
                <form class="form-inline">
                 <input class="form-control mr-sm-2"   style={{width:"100%",height:"100%"}} type="search" placeholder="Search Quiz" aria-label="Search"/>
                 <Button  class="mt-3 btn btn-primary"> Search</Button>
                
                </form>
              </div>    
              </div>  
              <div class="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{color:"green"}}><h2><b>Quiz Details</b></h2></div>
              <div class="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
              <Button variant="primary" onClick={handleShow}>
                Add New Quiz
              </Button>
             </div>
           </div>  
            <div class="row">
                <div class="table-responsive " >
                 <table class="table table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Exam Code</th>
                            <th>Quiz </th>
                            <th>A</th>
                            <th>B </th>
                            <th>C </th>
                            <th>D</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr>
                            <td>1</td>
                            <td>To01</td>
                            <td>Kết quả của 3 + 5 là:</td>
                            <td>2 </td>
                            <td>3 </td>
                            <td>5 </td>
                            <td>8 </td>
                            <td>
                             
                                <a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                                <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}><i class="material-icons">&#xE872;</i></a>
                                 
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>To01</td>
                            <td>Số cần điền vào: … – 2 = 3 là:</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>
                        
                                <a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                                <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}><i class="material-icons">&#xE872;</i></a>
                            </td>
                        </tr>
                         
 
                        <tr>
                            <td>3</td>
                            <td>To01</td>  
                            <td>Sắp xếp các số: 0, 5, 2, 10 theo thứ tự từ bé đến lớn:</td>
                            <td>10, 5, 2, 0.</td>
                            <td>2, 0, 10, 5</td>
                            <td>0, 2, 5, 10.</td>
                            <td>5, 0, 2, 10</td>
                            <td>
                         
                                <a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                                <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}><i class="material-icons">&#xE872;</i></a>
                            </td>
                        </tr>
 
                        <tr>
                            <td>4</td>
                            <td>To01</td>
                            <td>Chon phép tính đúng?</td>
                            <td>10 – 5 = 6</td>
                            <td>4 + 5 = 9</td>
                            <td>9 – 6 = 2</td>
                            <td>5 + 3 = 9</td>
                            <td>
                           
                                <a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                                <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}><i class="material-icons">&#xE872;</i></a>
                            </td>
                        </tr>
 
 
                        <tr>
                            <td>5</td>
                            <td>To01</td>
                            <td>Số bé nhất trong các số: 8, 3, 10, 6 là:</td>
                            <td>3</td>
                            <td>8</td>
                            <td>10</td>
                            <td>6</td>
                            <td>
                            
                                <a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                                <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}><i class="material-icons">&#xE872;</i></a>
                            </td>
                        </tr>
 
 
                        <tr>
                            <td>6</td>
                            <td>To01</td>
                            <td>Số còn thiếu trong dãy số: 1, ….., 3, ….., 5 là:</td>
                            <td>0, 2</td>
                            <td>2, 4</td>
                            <td>6, 4</td>
                            <td>2, 6</td>
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
          <Modal.Title>Add Quiz</Modal.Title>
        </Modal.Header>
            <Modal.Body>
            <form>
                <div class="form-group">
                    <input type="text" class="form-control"  placeholder="Enter Exam Code"/>
                </div>
                 <div class="form-group">
                    <input type="text" class="form-control"  placeholder="Enter Quiz"/>
                </div>
                <div class="form-group mt-3">
                    <input type="text" class="form-control"  placeholder="A"/>
                </div>
                <div class="form-group mt-3">
                    <input type="text" class="form-control" placeholder="B"/>
                </div>
                <div class="form-group mt-3">
                    <input type="text" class="form-control"  placeholder="C"/>
                              </div>
                              <div class="form-group mt-3">
                    <input type="text" class="form-control"  placeholder="D"/>
                </div>
                
                  <button type="submit" class="btn btn-success mt-4">Add Quiz</button>
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
 
export default UpdateQuiz;