import User from './User';

const UserList = ({ users, deleteUser, changeShowModal, setIsUserToUpdate, editUser }) => {
  return (
    <section className="relative">
      {users.map((user) => (
        <User
        className="grid-container Grid-[repeat(auto-fill_250px)] gap-4"
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
