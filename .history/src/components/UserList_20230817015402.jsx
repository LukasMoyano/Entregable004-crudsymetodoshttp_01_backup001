import User from './User';

const UserList = ({ users, deleteUser, changeShowModal, setIsUserToUpdate, editUser }) => {
  return (
    <section className="">
      {users.map((user) => (
        <User
        className="user"
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

export default UserList;
