import { createRoot } from 'react-dom/client'

const myelement = (
  <table>
    <tr>
      <th>Name</th>
      <th>Age</th>
    </tr>
    <tr>
      <td>John</td>
      <td>25</td>
    </tr>
    <tr>
      <td>Elsa</td>
      <td>30</td>
    </tr>
  </table>
);

createRoot(document.getElementById('root')).render(
  myelement
)

