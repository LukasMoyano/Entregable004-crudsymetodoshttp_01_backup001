import User from './User';
import PropTypes from 'prop-types';

const UserList = ({ users, deleteUser, changeShowModal, setIsUserToUpdate, editUser }) => {
  return (
    <section className="flex flex-wrap gap-2">
      {users.map((user) => (
        <User
          className="w-1/6 bg-gray-400 h-12"
          key={user.id}
          user={user}
          deleteUser={deleteUser}
          changeShowModal={changeShowModal}
          setIsUserToUpdate={setIsUserToUpdate}
          editUser={editUser}
        />
      ))}
    </section>
  );
};

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  deleteUser: PropTypes.func.isRequired,
  changeShowModal: PropTypes.func.isRequired,
  setIsUserToUpdate: PropTypes.func.isRequired,
  editUser: PropTypes.func.isRequired,
};

export default UserList;
