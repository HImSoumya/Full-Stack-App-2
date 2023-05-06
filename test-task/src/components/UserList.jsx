import PropTypes from 'prop-types';
const UserList = ({ name, age, email, mobile, govtidtype, govtid, guardianname, address, nationality }) => {
    return (
        < >
            <tr>
                <th scope="row">{name}</th>
                <td>{age}</td>
                <td>{email}</td>
                <td>{mobile}</td>
                <td>{govtidtype}</td>
                <td>{govtid}</td>
                <td>{guardianname}</td>
                <td>{address}</td>
                <td>{nationality}</td>
            </tr>
        </>
    )
}

UserList.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    mobile: PropTypes.number.isRequired,
    govtidtype: PropTypes.string.isRequired,
    govtid: PropTypes.number.isRequired,
    guardianname: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    nationality: PropTypes.string.isRequired,
};
export default UserList
