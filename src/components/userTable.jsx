import { useState } from "react";

  const UserList = (props) => {
//    açılır pencerenin gösterilip gösterilmeceği durumun tutma
  const [showPopup, setShowPopup] = useState(false);


//   silinecek elemanın id değeri-state tut
  const [deletingId, setDeletingId]= useState(null);

// sil butonun atıklanınca
  const handleDelete = (id) => { 
  const filtred = props.users.filter((user) => user.id !== id);
    // eğerki kullanıcının id benim sileceğimle aynı edğilse
    // filtere aktar.

    //   form.jsx statei güncellemek iççin
    props.setUsers(filtred);

    // popupa kapatmak için 
    setShowPopup(false);
  };

const handlePopup=(id)=>{
    // id değerinne modalin erişmesi içis state aktar
    setDeletingId(id);
    // popup göster
    setShowPopup(true);
};
 //   herhangi bir eleman yoksa kullanıcı yok yazısı ekrana bas

 if (props.users.length === 0) return 'Lütfen kullanıcı ekleyiniz..';

  return (
    <table className="table bordered striped">
      <thead>
        <tr>
          <th>#</th>
          <th>isim</th>
          <th>soyisim</th>
          <th>doğum tarihi</th>
          <th>işlemler</th>
        </tr>
      </thead>
      <tbody>
    
        {props.users.map((user, i) => (
          <tr>
            <td>{i}</td>
            <td>{user.name}</td>
            <td>{user.surname}</td>
            <td>{user.name}</td>
            <td > 
                <button 
                 className="btn btn-primary"
                 onClick={() => handlePopup(user.id)}
               >
                   Sil
              </button>
            </td>
          </tr>
        ))}
      </tbody>

     {showPopup &&(
      <div className="popup">
        <div className="info">
          <h2>Silme işlemini onaylıyor musunuz?</h2>
          <div className="buttons">
            <button 
            className="btn btn-secondary" 
            onClick={()=> setShowPopup(false)}
            >Hayır</button>
            <button 
            className="btn btn-danger" 
            onClick={()=> handleDelete(deletingId)}
            >Evet</button>
          </div>
        </div>
      </div>
      )}
    </table>
  );
};
export default UserList;

/* bunu yukarıda da akabilrisn ama const tanımlanman ferekir */
// const tableRows= {props.users.map((user,i)=>(
//
//     <tr>
//         <td>{i}</td>
//         <td>{user.name}</td>
//         <td>{user.surname}</td>
//         <td>{user.name}</td>
//         <td className="btn btn-primary">Sil</td>
//     </tr>  ));
