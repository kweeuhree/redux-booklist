<h1>Book List with Redux+Vite</h1>
<h3>Overview</h3>
<p>The Book List application is a simple web app built with React and Redux. It allows users to add, update, and delete books from a list, with real-time state management handled through Redux Toolkit. The app also incorporates a messaging system to display success or error messages that automatically disappear after 3 seconds.</p>
<table>
  <tr>
    <th>Technology</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>React</td>
    <td>A JavaScript library for building user interfaces.</td>
  </tr>
  <tr>
    <td>Redux Toolkit</td>
    <td>A set of tools to help work with Redux more efficiently, including <code>createSlice</code> for reducers.</td>
  </tr>
  <tr>
    <td>TypeScript</td>
    <td>A typed superset of JavaScript that enhances the development experience by providing type safety.</td>
  </tr>
  <tr>
    <td>Immer</td>
    <td>To allow safe mutation of the state inside reducers.</td>
  </tr>
</table>

<h3>Thunk Actions</h3>
<table>
  <tr>
    <th>Action</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>messageWithTimeout</td>
    <td>A thunk action that sets a message and clears it after 5 seconds:</td>
  </tr>
</table>
      <pre><code>
export const messageWithTimeout = (newMessage: string): AppThunk => (dispatch) => {
  dispatch(UpdateMessage(newMessage));
  setTimeout(() => {
    dispatch(ClearMessage());
  }, 5000);
};
      </code></pre>

