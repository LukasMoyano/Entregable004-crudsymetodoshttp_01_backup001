import User from './User';

const UserList = ({ users, deleteUser, changeShowModal, setIsUserToUpdate, editUser }) => {
  return (
    <section className="flex gap-2">
      {users.map((user) => (
        <User
        className=""
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
