import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

class ToDoList extends React.Component {
  state = {
    text: '',
    todos: [
      { text: 'Go Shopping', id: 0, isCompleted: false },
      { text: 'Walk The Dog', id: 1, isCompleted: false },
    ],
    modalIsOpen: false,
    textToEdit: '',
  };

  addTodo = () => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: Math.random(),
          text: this.state.text,
          isCompleted: false,
        },
      ],
      text: '',
    });
  };

  deleteTodo = (i) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== i),
    });
  };

  completeTodo = (i) => {
    this.setState({
      todos: this.state.todos.map((todo) =>
        todo.id === i ? { ...todo, isCompleted: !todo.isCompleted } : todo
      ),
    });
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  editTodo = (e, i) => {
    console.log(e);
    console.log(i);
    this.setState({
      todos: this.state.todos.map((todo) =>
        todo.id === i ? { ...todo, text: this.state.textToEdit } : todo
      ),
      textToEdit: '',
      modalIsOpen: false,
    });
  };

  render() {
    return (
      <div>
        <div className="Input-Container">
          <div className="add-element">
            <h1>TO-DO APP!</h1>
            <h4>Add New To-Do</h4>
            <input
              type="text"
              id="myInput"
              placeholder="Enter New Task..."
              value={this.state.text}
              onChange={(e) => this.setState({ text: e.target.value })}
            />
            <br />
            <button className="add-Btn" onClick={this.addTodo}>
              Add
            </button>
          </div>
        </div>
        <div>
          <h2>Let's get some work done!</h2>
          {this.state.todos.map((todo) => (
            <ul id="myUL" key={todo.id}>
              <li>
                <p
                  onClick={() => this.completeTodo(todo.id)}
                  style={
                    todo.isCompleted ? { textDecoration: 'line-through' } : {}
                  }
                >
                  {todo.text}
                </p>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '60px',
                  }}
                >
                  <div>
                    <button className="btn" onClick={this.openModal}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 48 48"
                        version="1.1"
                      >
                        <g id="surface7246542">
                          <path
                            style={{ fill: '#7c7c7c' }}
                            d="M 36 4 L 31.171875 8.828125 L 39.171875 16.828125 L 44 12 Z M 28.152344 11.847656 L 6 34 L 6 42 L 14 42 L 36.152344 19.847656 Z M 28.152344 11.847656 "
                          />
                        </g>
                      </svg>
                    </button>

                    <Modal
                      isOpen={this.state.modalIsOpen}
                      onRequestClose={this.closeModal}
                      style={customStyles}
                      contentLabel="Example Modal"
                    >
                      <input
                        id="ModalInput"
                        type="text"
                        placeholder="Edit to do..."
                        /* value={this.state.textToEdit} */
                        onChange={(e) =>
                          this.setState({ textToEdit: e.target.value })
                        }
                      />
                      <button
                        className="Modal-Btn"
                        onClick={(e) => this.editTodo(e, todo.id)}
                      >
                        Save
                      </button>
                      <button className="Modal-Btn" onClick={this.closeModal}>
                        close
                      </button>
                    </Modal>
                  </div>
                  <button
                    className="btn"
                    onClick={() => this.deleteTodo(todo.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="24"
                      height="24"
                      viewBox="0 0 172 172"
                      style={{ fill: '#7c7c7c' }}
                    >
                      <g
                        fill="none"
                        fillRule="nonzero"
                        stroke="none"
                        strokeWidth="1"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit="10"
                        strokeDasharray=""
                        strokeDashoffset="0"
                        fontFamily="none"
                        fontWeight="none"
                        fontSize="none"
                        textAnchor="none"
                        style={{ mixBlendMode: 'normal' }}
                      >
                        <path d="M0,172v-172h172v172z" fill="none"></path>
                        <g fill="#7c7c7c">
                          <path d="M71.66667,14.33333l-7.16667,7.16667h-35.83333v14.33333h114.66667v-14.33333h-35.83333l-7.16667,-7.16667zM35.83333,50.16667v107.5h100.33333v-107.5zM67.43945,71.66667l18.56055,18.56055l18.56055,-18.56055l10.10612,10.10612l-18.56055,18.56055l18.56055,18.56055l-10.10612,10.10612l-18.56055,-18.56055l-18.56055,18.56055l-10.10612,-10.10612l18.56055,-18.56055l-18.56055,-18.56055z"></path>
                        </g>
                      </g>
                    </svg>
                  </button>
                </div>
              </li>
            </ul>
          ))}
        </div>
      </div>
    );
  }
}

export default ToDoList;
