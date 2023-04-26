import Table from 'react-bootstrap/Table';

function HistoryExample() {
  return (
    <Table >
      <thead>
        <tr>
          <th>#</th>
          <th> Subject title</th>
          <th> Exam</th>
          <th>Test score</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Math</td>
          <td>1st Grade Math </td>
          <td>10/10</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Literature</td>
          <td>1st Grade Literature</td>
          <td>10/10</td>
        </tr>
        <tr>
          <td>3</td>
          <td>English</td>
          <td>1st Grade English</td>
          <td>10/10</td>
              </tr>
              <tr>
          <td>4</td>
          <td>Math</td>
          <td>2st Grade Math</td>
          <td>10/10</td>
              </tr>
              <tr>
          <td>5</td>
          <td>Literature</td>
          <td>2st Grade Literature</td>
          <td>10/10</td>
              </tr>
              <tr>
          <td>6</td>
          <td>English</td>
          <td>2st Grade English</td>
          <td>10/10</td>
              </tr>
      </tbody>
    </Table>
  );
}

export default HistoryExample;